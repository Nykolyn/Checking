import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll';
import { connect } from 'react-redux';
import styles from './TodayTomorowTab.module.css';
import CardList from '../../CardList/CardList';
import { burgerEvent } from '../../../../redux/componentController/controllerSelectrors';

// import { getTodayTomorrow } from '../../../../redux/tasks/tasksSelectors';

// const filterCardTime = array => {
//   return array.filter(el.priority.sort());
// };

class TodayTomorrowTab extends Component {
  state = {
    isOpenToday: true,
    isOpenTomorrow: true,

    // todayTomorrow: null,
  };

  componentDidMount() {
    // const { todayTomorrow} = this.props;
    // this.setState({
    //   todayTomorrow: [...todayTomorrow],
    // });
    const { burgerEvent } = this.props;
    if (burgerEvent) {
      scroller.scrollTo(burgerEvent, {
        duration: 1500,
        delay: 100,
        smooth: true,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { burgerEvent } = this.props;
    if (prevProps.burgerEvent !== burgerEvent) {
      scroller.scrollTo(burgerEvent, {
        duration: 1500,
        delay: 100,
        smooth: true,
      });
    }
  }

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
    // const filterCard = filterCardTime(todayTomorrow);
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

// export default TodayTomorrowTab;

const mapStateToProps = state => ({
  burgerEvent: burgerEvent(state),
});

export default connect(
  mapStateToProps,
  null,
)(TodayTomorrowTab);
