/*eslint-disable*/
import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll';
import { connect } from 'react-redux';
import styles from './TodayTomorowTab.module.css';
import CardList from '../../CardList/CardList';
import { burgerEvent } from '../../../../redux/componentController/controllerSelectrors';
import { getTodayTomorrowTasks } from '../../../../redux/tasks/tasksSelectors';

//FILTER NE TROGAT`

// const filterCard = array => {
//   let filtredArray = [];
//   if (array.length >= 1) {
//     filtredArray = array.filter(el.priority.sort());
//   }
//   return filtredArray;
// };

class TodayTomorrowTab extends Component {
  state = {
    isOpenToday: true,
    isOpenTomorrow: true,
    todayTasks: [],
    tomorrowTasks: [],
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
    const { getTodayTomorrowTasks } = this.props;
    if (prevProps.getTodayTomorrowTasks.today !== getTodayTomorrowTasks.today) {
      this.setState({
        todayTasks: [...getTodayTomorrowTasks.today],
      });
    }

    if (
      prevProps.getTodayTomorrowTasks.tomorrow !==
      getTodayTomorrowTasks.tomorrow
    ) {
      this.setState({
        tomorrowTasks: [...getTodayTomorrowTasks.tomorrow],
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
    const {
      isOpenToday,
      isOpenTomorrow,
      todayTasks,
      tomorrowTasks,
    } = this.state;
    //FILTER NE TROGAT`
    // const filterCardToday = filterCard(todayTasks);
    // const filterCardTomorrow = filterCard(tomorrowTasks);
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
            {isOpenToday && <CardList cardItems={todayTasks} />}
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
              Tomorrow
            </button>
            {isOpenTomorrow && <CardList cardItems={tomorrowTasks} />}
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
