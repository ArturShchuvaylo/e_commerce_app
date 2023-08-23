const array = [
  { name: "first", timeOut: 3000 },
  { name: "second", timeOut: 5000 },
  { name: "third", timeOut: 2000 },
];

const funcLoop = async (arr) => {
  for (let elem of arr) {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(elem.name);
        resolve();
      }, elem.timeOut);
    });
  }
};

funcLoop(array);
