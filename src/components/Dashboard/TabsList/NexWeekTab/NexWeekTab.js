/*eslint-disable*/
import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll';
import { connect } from 'react-redux';
import styles from './NexWeekTab.module.css';
import CardList from '../../CardList/CardList';
import { burgerEvent } from '../../../../redux/componentController/controllerSelectrors';

// import { getTodayTomorrow } from '../../../../redux/tasks/tasksSelectors';

class NexWeekTab extends Component {
  state = {
    isOpenNext: true,
    isOpenAfter: true,
    // nexAfter: null,
  };

  componentDidMount() {
    // const { nexAfter } = this.props;
    // this.setState({
    //   nexAfter: [...nexAfter],
    // });
    const { burgerEvent } = this.props;
    if (burgerEvent) {
      this.scrollFn(burgerEvent);
    }
  }

  componentDidUpdate(prevProps) {
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
    const { isOpenNext, isOpenAfter } = this.state;
    return (
      <main className={styles.container}>
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
            {isOpenNext && <CardList />}
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
            {isOpenAfter && <CardList />}
          </section>
        </Element>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  // nextAfter: getNextAfter(state),
  burgerEvent: burgerEvent(state),
});

const mapDispatchToProps = dispatch => ({
  getBurgerEvent: () => dispatch(burgerEvent(null)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NexWeekTab);
