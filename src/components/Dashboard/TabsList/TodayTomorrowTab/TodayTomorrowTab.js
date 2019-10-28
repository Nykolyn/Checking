/*eslint-disable*/
import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll';
import { connect } from 'react-redux';
import styles from './TodayTomorowTab.module.css';
import CardList from '../../CardList/CardList';
import { burgerEvent } from '../../../../redux/componentController/controllerSelectrors';
import { getTodayTomorrowTasks } from '../../../../redux/tasks/tasksSelectors';

// const filterCardTime = array => {
//   return array.filter(el.priority.sort());
// };

class TodayTomorrowTab extends Component {
  state = {
    isOpenToday: true,
    isOpenTomorrow: true,
    todayTasks: {},
    tomorrowTasks: {},
  };

  componentDidMount() {
    //setState  today/tomorrow tasks
    const { getTodayTomorrowTasks } = this.props;
    this.setState({
      todayTasks: [...getTodayTomorrowTasks.today],
      tomorrowTasks: [...getTodayTomorrowTasks.tomorrow],
    });

    //scroll to event from burger menu
    const { burgerEvent } = this.props;
    if (burgerEvent) {
      this.scrollFn(burgerEvent);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //setState  today/tomorrow tasks
    // const { getTodayTomorrowTasks } = this.props;
    // if (prevState.getTodayTomorrowTasks !== getTodayTomorrowTasks) {
    //   this.setState({
    //     today: [...getTodayTomorrowTasks.today],
    //     tomorrow: [...getTodayTomorrowTasks.tomorrow],
    //   });
    // }

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

  handleToggleToday = () => {
    this.setState(state => ({
      isOpenToday: !state.isOpenToday,
    }));
  };

  handleToggleTomorrow = () => {
    this.setState(state => ({
      isOpenTomorrow: !state.isOpenTomorrow,
    }));
  };

  render() {
    const { isOpenToday, isOpenTomorrow } = this.state;
    // const filterCardToday = filterCardTime((getAllTasks.todayTomorrow.today);
    // const filterCardTomorrow = filterCardTime(todayTomorrow.tomorrow);
    return (
      <main className={styles.container}>
        <Element name="today">
          <section className={styles.section}>
            <button
              type="button"
              onClick={this.handleToggleToday}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              className={
                isOpenToday
                  ? [styles.titleButton, styles.titleToday].join(' ')
                  : [
                      styles.titleButton,
                      styles.dropDoun,
                      styles.titleToday,
                    ].join(' ')
              }
            >
              Today
            </button>
            {isOpenToday && (
              // <CardList cardItems={filterCard}/>
              <CardList />
            )}
          </section>
        </Element>

        <Element name="tomorrow">
          <section className={styles.section}>
            <button
              type="button"
              onClick={this.handleToggleTomorrow}
              className={
                isOpenTomorrow
                  ? [styles.titleButton, styles.titleTomorrow].join(' ')
                  : [
                      styles.titleButton,
                      styles.dropDoun,
                      styles.titleTomorrow,
                    ].join(' ')
              }
            >
              Tomoroow
            </button>
            {isOpenTomorrow && <CardList />}
          </section>
        </Element>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  getTodayTomorrowTasks: getTodayTomorrowTasks(state),
  burgerEvent: burgerEvent(state),
});

export default connect(
  mapStateToProps,
  null,
)(TodayTomorrowTab);
