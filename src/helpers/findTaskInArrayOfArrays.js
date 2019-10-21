const findTask = (objectOfArrays, id) =>
  Object.values(objectOfArrays)
    .concat()
    .find(task => task._id === id);

export default findTask;
