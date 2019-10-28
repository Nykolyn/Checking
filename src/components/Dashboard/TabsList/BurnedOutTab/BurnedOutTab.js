import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import { getBurnedOutTasks } from '../../../../redux/tasks/tasksSelectors';
import CardList from '../../CardList/CardList';
import styles from './BurnedOutTab.module.css';

class BurnedOutTab extends Component {
  state = {
    burnedOutTasks: [],
  };

  componentDidMount() {
    const { getBurnedOutTasks } = this.props;
    this.setState({
      burnedOutTasks: getBurnedOutTasks,
    });
  }

  render() {
    return (
      <main className={styles.container}>
        <Element name="burnedOut">
          <section className={styles.section}>
            {/* <button type="button" className={styles.titleButton}>
            Burned Out
          </button> */}
            <p className={styles.titleButton}>Burned Out</p>
            <CardList />
          </section>
        </Element>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  getBurnedOutTasks: getBurnedOutTasks(state),
});

export default connect(mapStateToProps)(BurnedOutTab);
