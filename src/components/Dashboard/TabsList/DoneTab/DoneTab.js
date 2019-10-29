/*eslint-disable*/
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
    const { getDone } = this.props;
    this.setState({
      doneTasks: getDone,
    });
  }

  render() {
    const { doneTasks } = this.state;
    return (
      <main className={styles.container}>
        <Element name="done">
          <section className={styles.section}>
            {/* <button type="button" className={styles.titleButton}>
            Done
          </button> */}
            <p className={styles.titleButton}>Done</p>
            <CardList cardItems={doneTasks} />
          </section>
        </Element>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  getDone: getDoneTasks(state),
});

export default connect(mapStateToProps)(DoneTab);
