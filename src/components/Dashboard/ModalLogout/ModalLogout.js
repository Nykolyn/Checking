/*eslint-disable*/
import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import styles from './ModalLogout.module.css';
import { modalLogoutClose } from '../../../redux/componentController/componentActions';
import { signOut } from '../../../redux/session/sessionOperations';
class ModalLogout extends Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  onClose = () => {
    return this.props.modalLogoutClose();
  };

  onSignOut = () => {
    return this.props.signOut();
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
    return (
      this.props.openModalLogout && (
        <div
          className={styles.backdrop}
          ref={this.backdropRef}
          onClick={this.handleBackdropClick}
        >
          <div className={styles.modal}>
            <p className={styles.question}>Are you sure you want to logout?</p>
            <div className={styles.buttons}>
              <button
                type="button"
                className={styles.button}
                onClick={() => {
                  this.onSignOut();
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
  openModalLogout: state.componentController.modalLogoutOpen,
});

const mapDispatchToProps = { modalLogoutClose, signOut };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalLogout);
