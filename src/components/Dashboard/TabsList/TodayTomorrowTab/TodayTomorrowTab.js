import React, { Component } from 'react';
import { Element } from 'react-scroll';
import styles from './TodayTomorowTab.module.css';
// import CardList from '../../CardList/CardList';
// import { connect } from 'react-redux';
// import { getTodayTomorrow } from '../../../../redux/tasks/tasksSelectors';

class TodayTomorrowTab extends Component {
  state = {
    isOpenToday: true,
    isOpenTomorrow: true,
    // burgerEvent: null,
    // todayTomorrow: null,
  };

  componentDidMount() {
    // const { todayTomorrow, burgerClick } = this.props;
    // this.setState({
    //   todayTomorrow: [...todayTomorrow],
    //   burgerEvent: burgerClick,
    // });
  }

  // componentDidUpdate(prevProps, prevState) {}

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
              // <CardList />
              <ul className={styles.cardList}>
                <li className={styles.cardItem}> card</li>
                <li className={styles.cardItem}> card</li>
                <li className={styles.cardItem}> card</li>
              </ul>
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
            {isOpenTomorrow && (
              // <CardList />
              <ul className={styles.cardList}>
                <li className={styles.cardItem}> card</li>
                <li className={styles.cardItem}> card</li>
                <li className={styles.cardItem}> card</li>
              </ul>
            )}
          </section>
        </Element>
      </main>
    );
  }
}

export default TodayTomorrowTab;

// const mapStateToProps = state => ({
//   todayTomorrow:  getTodayTomorrow(state),
// });

// export default connect(
//   mapStateToProps,
//   null,
// )(TodayTomorrowTab);
