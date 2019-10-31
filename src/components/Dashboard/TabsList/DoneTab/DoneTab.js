/*eslint-disable*/
import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { connect } from 'react-redux';
import CardList from '../../CardList/CardList';
import { taskPopUpCreateIsOpen } from '../../../../redux/componentController/controllerSelectrors';
import { getDoneTasks } from '../../../../redux/tasks/tasksSelectors';
import styles from './DoneTab.module.css';

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

  componentDidUpdate(prevProps, prevState) {
    const { getDone } = this.props;
    if (prevProps.getDone !== getDone) {
      this.setState({
        doneTasks: getDone,
      });
    }
  }

  render() {
    const { doneTasks } = this.state;
    const { taskPopUpCreateIsOpen } = this.props;
    return (
      <main
        className={
          !taskPopUpCreateIsOpen ? [styles.container] : [styles.containerOpen]
        }
      >
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
  taskPopUpCreateIsOpen: taskPopUpCreateIsOpen(state),
});

export default connect(mapStateToProps)(DoneTab);
