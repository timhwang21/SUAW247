export const fireToArray = snapshot => {
  const returnArr = [];

  snapshot.forEach(child => {
    const item = child.val();
    item.key = child.key;
    returnArr.push(item);
  });

  return returnArr;
};
