export const ActionTypes = {
  MODAL_DELETE_TASK_OPEN: 'MODAL_DELETE_TASK_OPEN',
  HANDLE_OPEN_TABS_LIST: 'HANDLE_OPEN_TABS_LIST',
  HANDLE_OPEN_MODAL_LOGOUT: 'HANDLE_OPEN_MODAL_LOGOUT',
  HANDLE_OPEN_TASK_POPUP: 'HANDLE_OPEN_TASK_POPUP',
  HANDLE_OPEN_BURGER_MENU: 'HANDLE_OPEN_BURGER_MENU',
  HANDLE_OPEN_СREATE_TASK_BUTTON: 'HANDLE_OPEN_СREATE_TASK_BUTTON',
  HANDLE_BURGER_EVENT_BUTTON: 'HANDLE_BURGER_EVENT_BUTTON',
};

export const modalDeleteTaskOpen = () => ({
  type: ActionTypes.MODAL_DELETE_TASK_OPEN,
  payload: {},
});

export const modalLogoutOpen = () => ({
  type: ActionTypes.HANDLE_OPEN_TABS_LIST,
  payload: {},
});

export const taskPopUpOpen = () => ({
  type: ActionTypes.HANDLE_OPEN_TASK_POPUP,
  payload: {},
});

export const burgerMenuOpen = () => ({
  type: ActionTypes.HANDLE_OPEN_BURGER_MENU,
  payload: {},
});

export const burgerEvent = value => ({
  type: ActionTypes.HANDLE_BURGER_EVENT_BUTTON,
  payload: value,
});

export const createTaskButtonOpen = () => ({
  type: ActionTypes.HANDLE_OPEN_СREATE_TASK_BUTTON,
  payload: {},
});

export const tabsListOpen = () => ({
  type: ActionTypes.HANDLE_OPEN_TABS_LIST,
  payload: {},
});
