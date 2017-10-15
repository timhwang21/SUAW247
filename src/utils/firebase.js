export const fireToArray = snapshot => {
  const returnArr = [];

  snapshot.forEach(child => {
    const item = child.data();
    item.id = child.id;
    returnArr.push(item);
  });

  return returnArr;
};
