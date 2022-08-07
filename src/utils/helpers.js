export const generateIpsum = (pool) => {
  const pars = 5;
  const sents = 5;
  let newIpsum = [];
  for (let i = 0; i < pars; i++) {
    let newPar = '';
    for (let j = 0; j < sents; j++) {
      newPar += pool[Math.floor(Math.random() * pool.length)];
    }
    newIpsum.push(newPar);
    newPar = '';
  }
  return newIpsum;
};
export const findItem = (newName, items) => {
  let newItem;
  for (let item of items) {
    if (item.name === newName) {
      newItem = item;
      break;
    }
  }
  return newItem;
};
