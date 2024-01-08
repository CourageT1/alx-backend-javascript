// 8-clean_set.js
function cleanSet(set, startString) {
  const resultArray = [];

  set.forEach(value => {
    if (value.startsWith(startString)) {
      const cleanedValue = startString === '' ? value : value.slice(startString.length);
      resultArray.push(cleanedValue);
    }
  });

  console.log(resultArray.join('-'));
}

export default cleanSet;
