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
    refreshUserData: PropTypes.func.isRequired,
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
        <div className={css.headerContainer}>
          <Header />
        </div>
        <main>
          <Media
            queries={{
              small: '(min-width: 320px) and (max-width: 979px)',
              large: '(min-width: 980px)',
            }}
          >
            {matches => (
              <>
                {matches.small && (
                  <div
                    className={`${css.dashboard} ${taskCreateOpen &&
                      css.dashboardPopUpOpen}`}
                  >
                    {taskCreateOpen ? (
                      <aside className={css.createTaskModalWrapper}>
                        <TaskPopUp />
                      </aside>
                    ) : (
                      <>
                        <div className={css.popUpDesktop}>
                          <div className={css.CreateTaskButtonWrapper}>
                            <CreateTaskButton />
                          </div>
                        </div>
                        <TabsList />
                      </>
                    )}
                  </div>
                )}
                {matches.large && (
                  <div className={css.dashboard}>
                    <aside
                      className={`${
                        taskCreateOpen
                          ? css.createTaskModalWrapperOpen
                          : css.popUpDesktop
                      }`}
                    >
                      {taskCreateOpen ? (
                        <TaskPopUp />
                      ) : (
                        <div className={css.CreateTaskButtonWrapper}>
                          <CreateTaskButton />
                        </div>
                      )}
                    </aside>
                    <div
                      className={`${
                        taskCreateOpen
                          ? css.tabsListContainerOpen
                          : css.tabsListContainerClose
                      }`}
                    >
                      <TabsList />
                    </div>
                  </div>
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
