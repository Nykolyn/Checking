import msConverter from '../constants/msConverter';
import taskTypes from '../constants/taskTypes';

const defineDispatcher = ({ dates }) => {
  const dateToDay = new Date(dates[0]).getTime();
  const currentDay =
    new Date().getTime() -
    new Date().getHours() * msConverter.msInHour -
    new Date().getMinutes() * msConverter.msInMinute -
    new Date().getSeconds() * msConverter.msInSecond -
    new Date().getMilliseconds();
  if (dateToDay < currentDay + msConverter.msInDay) {
    return taskTypes.TODAY;
  }
  if (dateToDay < currentDay + msConverter.msInDay * 2) {
    return taskTypes.TOMORROW;
  }
  if (dateToDay < currentDay + msConverter.msInDay * 7) {
    return taskTypes.NEXT;
  }
  return taskTypes.AFTER;
};

export default defineDispatcher;
