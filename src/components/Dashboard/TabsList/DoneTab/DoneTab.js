import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { connect } from 'react-redux';
import styles from './DoneTab.module.css';
import CardList from '../../CardList/CardList';
import { getDoneTasks } from '../../../../redux/tasks/tasksSelectors';

class DoneTab extends Component {
  state = {
    doneTasks: [],
  };

  componentDidMount() {
    const { getDoneTasks } = this.props;
    this.setState({
      doneTasks: getDoneTasks,
    });
  }

  render() {
    return (
      <main className={styles.container}>
        <Element name="done">
          <section className={styles.section}>
            {/* <button type="button" className={styles.titleButton}>
            Done
          </button> */}
            <p className={styles.titleButton}>Done</p>
            <CardList />
          </section>
        </Element>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  getDoneTasks: getDoneTasks(state),
});

export default connect(mapStateToProps)(DoneTab);
