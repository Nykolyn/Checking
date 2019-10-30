import React, { Component } from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import TaskPopUp from '../TaskPopUp/TaskPopUpContainer';
import TabsList from './TabsList/TabsList';
import css from './Dashbard.module.css';
import CreateTaskButton from '../CreateTaskButton/CreateTaskButtonContainer';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Header from '../Header/Header';

class Dashboard extends Component {
  static propTypes = {
    taskCreateOpen: PropTypes.bool.isRequired,
  };

  state = {};

  componentDidMount() {}

  render() {
    const { taskCreateOpen } = this.props;
    return (
      <>
        <Header />
        <main>
          <BurgerMenu />
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

export default Dashboard;
