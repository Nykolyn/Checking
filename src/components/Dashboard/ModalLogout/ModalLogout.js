/*eslint-disable*/
import React, { Component, createRef } from 'react';
import styles from './ModalLogout.module.css';

export default class Modal extends Component {
  // add state from Redux
  state = {
    isOpen: true,
  };
  // ---#---

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  onClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;
    if (current && e.target !== current) {
      return;
    }
    this.onClose();
  };

  render() {
    const { children, url } = this.props;
    return (
      this.state.isOpen && (
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
