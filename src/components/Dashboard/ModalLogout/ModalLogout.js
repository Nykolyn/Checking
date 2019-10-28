/*eslint-disable*/
import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import styles from './ModalLogout.module.css';
import { modalLogoutClose } from '../../../redux/componentController/componentActions';
class ModalLogout extends Component {
  // add state from Reduxz

  // ---#---

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
    const { children } = this.props;

    return (
      this.props.openModal && (
        <div
          className={styles.backdrop}
          ref={this.backdropRef}
          onClick={this.handleBackdropClick}
        >
          <div className={styles.modal}>{children}</div>
        </div>
      )
    );
  }
}

const mapStateToProps = state => ({
  openModal: state.componentController.modalLogoutOpen,
});

const mapDispatchToProps = { modalLogoutClose };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalLogout);
