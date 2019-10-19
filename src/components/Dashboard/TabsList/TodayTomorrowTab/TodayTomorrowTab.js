import React, { Component } from 'react';
import styles from './TodayTomorowTab.module.css';
// import CardList from '../../CardList/CardList';
// import { connect } from 'react-redux';
// import { getTodayTomorrow } from '../../../../redux/tasks/tasksSelectors';

class TodayTomorrowTab extends Component {
  state = {
    isOpenToday: true,
    isOpenTomorrow: true,
    // todayTomorrow: null,
  };

  // componentDidMount() {
  //   const { todayTomorrow } = this.props;
  //   this.setState({
  //     todayTomorrow: [...todayTomorrow],
  //   });
  // }

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
        <section className={styles.section}>
          <button
            type="button"
            onClick={this.handleToggleToday}
            className={styles.titleButton}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            className={
              isOpenToday
                ? styles.titleButton
                : [styles.titleButton, styles.dropDoun].join(' ')
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

        <section className={styles.section}>
          <button
            type="button"
            onClick={this.handleToggleTomorrow}
            className={
              isOpenTomorrow
                ? styles.titleButton
                : [styles.titleButton, styles.dropDoun].join(' ')
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
