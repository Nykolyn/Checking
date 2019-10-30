import React, { Component } from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskPopUp from '../TaskPopUp/TaskPopUpContainer';
import TabsList from './TabsList/TabsList';
import css from './Dashbard.module.css';
import CreateTaskButton from '../CreateTaskButton/CreateTaskButtonContainer';
import Header from '../Header/Header';

import { refreshUser } from '../../redux/session/sessionOperations';

class Dashboard extends Component {
  static propTypes = {
    taskCreateOpen: PropTypes.bool.isRequired,
  };

  state = {};

  componentDidMount() {
    const { refreshUserData } = this.props;

    refreshUserData();
  }

  render() {
    const { taskCreateOpen } = this.props;
    return (
      <>
        <Header />
        <main>
          <Media
            queries={{
              small: '(min-width: 320px) and (max-width: 1199px)',
              large: '(min-width: 1200px)',
            }}
          >
            {matches => (
              <>
                {matches.small && (
                  <>
                    <div className={css.dashboard}>
                      {taskCreateOpen ? (
                        <aside className={css.createTaskModalWrapper}>
                          <TaskPopUp />
                        </aside>
                      ) : (
                        <>
                          <TabsList />
                          <div className={css.popUpDesktop}>
                            <div className={css.CreateTaskButtonWrapper}>
                              <CreateTaskButton />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                )}
                {matches.large && (
                  <>
                    <div className={css.dashboard}>
                      <TabsList />
                      {taskCreateOpen ? (
                        <aside className={css.createTaskModalWrapper}>
                          <TaskPopUp />
                        </aside>
                      ) : (
                        <div className={css.popUpDesktop}>
                          <div className={css.CreateTaskButtonWrapper}>
                            <CreateTaskButton />
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </>
            )}
          </Media>
        </main>
      </>
    );
  }
}

const mDTP = {
  refreshUserData: refreshUser,
};

export default connect(
  null,
  mDTP,
)(Dashboard);
