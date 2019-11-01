import { dateFormatter } from './cardFuncHelper';

// export const filterCard = array => {
//   let filtredArray = [];
//   if (array.length >= 1) {
//     filtredArray = array.filter(el.time.sort());
//     filtredArray = array.filter(el.priority.sort());
//   }
//   return filtredArray;
// };

export const sortBurnedOutTasks = arr => {
  console.log(arr);
};

export const sortDoneTasks = arr => {
  if (arr.length >= 1) {
    arr.sort((a, b) => (a.date > b.date ? -1 : 1));
  }
  return arr;
};
