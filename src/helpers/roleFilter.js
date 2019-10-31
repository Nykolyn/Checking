const roleFilter = arr => {
  return {
    partner: arr.filter(el => el.role === 'Partner').length,
    learner: arr.filter(el => el.role === 'Learner').length,
    dotherSon: arr.filter(el => el.role === 'Dauther / Son').length,
    coWorker: arr.filter(el => el.role === 'Co-worker').length,
    none: arr.filter(el => el.role === 'None').length,
  };
};

export default roleFilter;
