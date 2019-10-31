/*eslint-disable*/
import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import styles from './ModalDeleteTask.module.css';
import { modalDeleteTaskClose } from '../../../redux/componentController/componentActions';
import { deleteTask } from '../../../redux/tasks/tasksOperations';
class ModalDeleteTask extends Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  onClose = () => {
    return this.props.modalDeleteTaskClose();
  };

  onDeleteTask = () => {
    return this.props.deleteTask(this.props.taskToDelete);
  };

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;
    console.log(current);
    if (current && e.target !== current) {
      return;
    }
    this.onClose();
  };

  render() {
    // const { task } = this.props;
    return (
      this.props.openModalDeleteTask && (
        <div
          className={styles.backdrop}
          ref={this.backdropRef}
          onClick={this.handleBackdropClick}
        >
          <div className={styles.modal}>
            <p className={styles.question}>
              Are you sure you want to delete the task?
            </p>
            <div className={styles.buttons}>
              <button
                type="button"
                className={styles.button}
                onClick={() => {
                  this.onDeleteTask();
                  this.onClose();
                }}
              >
                Yes
              </button>
              <button
                type="button"
                className={styles.noButton}
                onClick={this.onClose}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = state => ({
  openModalDeleteTask: state.componentController.modalDeleteTaskOpen,
});

const mapDispatchToProps = { modalDeleteTaskClose, deleteTask };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalDeleteTask);
