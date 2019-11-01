/*eslint-disable*/
import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll';
import { connect } from 'react-redux';
import styles from './NexWeekTab.module.css';
import CardList from '../../CardList/CardList';
import {
  burgerEvent,
  taskPopUpCreateIsOpen,
  taskPopUpEditIsOpen,
} from '../../../../redux/componentController/controllerSelectrors';
import { getNextAfterTasks } from '../../../../redux/tasks/tasksSelectors';
import { sortNextAfterTasks } from '../../../../helpers/tasksFilterHelper';

class NexWeekTab extends Component {
  state = {
    isOpenNext: true,
    isOpenAfter: true,
    nextTasks: [],
    afterTasks: [],
  };

  componentDidMount() {
    //setState  next/after tasks
    const { getNextAfterTasks } = this.props;
    this.setState({
      nextTasks: [...getNextAfterTasks.next],
      afterTasks: [...getNextAfterTasks.after],
    });

    //scroll to event from burger menu
    const { burgerEvent } = this.props;
    if (burgerEvent === 'after') {
      this.setState({
        isOpenNext: false,
      });
    }
    if (burgerEvent) {
      this.scrollFn(burgerEvent);
    }
  }

  componentDidUpdate(prevProps) {
    const { getNextAfterTasks } = this.props;
    if (prevProps.getNextAfterTasks.next !== getNextAfterTasks.next) {
      this.setState({
        nextTasks: [...getNextAfterTasks.next],
      });
    }

    if (prevProps.getNextAfterTasks.after !== getNextAfterTasks.after) {
      this.setState({
        afterTasks: [...getNextAfterTasks.after],
      });
    }

    //scroll to event from burger menu
    const { burgerEvent } = this.props;
    if (prevProps.burgerEvent !== burgerEvent) {
      this.scrollFn(burgerEvent);
    }
  }

  scrollFn = value => {
    scroller.scrollTo(value, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  handleToggleNext = () => {
    this.setState(state => ({
      isOpenNext: !state.isOpenNext,
    }));
  };

  handleToggleAfter = () => {
    this.setState(state => ({
      isOpenAfter: !state.isOpenAfter,
    }));
  };

  render() {
    const { isOpenNext, isOpenAfter, nextTasks, afterTasks } = this.state;
    const { taskPopUpCreateIsOpen, taskPopUpEditIsOpen } = this.props;
    const sortNextTasks = sortNextAfterTasks(nextTasks);
    const sortAfterTasks = sortNextAfterTasks(afterTasks);
    return (
      <main
        className={
          taskPopUpCreateIsOpen || taskPopUpEditIsOpen
            ? [styles.containerOpen]
            : [styles.container]
        }
      >
        <Element name="next">
          <section className={styles.section}>
            <button
              type="button"
              onClick={this.handleToggleNext}
              className={styles.titleButton}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              className={
                isOpenNext
                  ? [styles.titleButton, styles.titleNext].join(' ')
                  : [
                      styles.titleButton,
                      styles.dropDoun,
                      styles.titleNext,
                    ].join(' ')
              }
            >
              Next 7 Days
            </button>
            {isOpenNext && <CardList cardItems={sortNextTasks} />}
          </section>
        </Element>

        <Element name="after">
          <section className={styles.section}>
            <button
              type="button"
              onClick={this.handleToggleAfter}
              className={
                isOpenAfter
                  ? [styles.titleButton, styles.titleAfter].join(' ')
                  : [
                      styles.titleButton,
                      styles.dropDoun,
                      styles.titleAfter,
                    ].join(' ')
              }
            >
              After 7 Days
            </button>
            {isOpenAfter && <CardList cardItems={sortAfterTasks} />}
          </section>
        </Element>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  getNextAfterTasks: getNextAfterTasks(state),
  burgerEvent: burgerEvent(state),
  taskPopUpCreateIsOpen: taskPopUpCreateIsOpen(state),
  taskPopUpEditIsOpen: taskPopUpEditIsOpen(state),
});

export default connect(
  mapStateToProps,
  null,
)(NexWeekTab);
