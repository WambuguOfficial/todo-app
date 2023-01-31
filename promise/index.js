const data = [  "Harry",  "Ross",  "Bruce",  "Cook",  "Carolyn",  "Morgan",  "Albert",  "Walker",  "Randy",  "Reed",  "Larry",  "Barnes",  "Lois",  "Wilson",  "Jesse",  "Campbell",  "Ernest",  "Rogers",  "Theresa",  "Patterson",  "Henry",  "Simmons",  "Michelle",  "Perry",  "Frank",  "Butler",  "Shirley"];

const getData = (callback) => {
  setTimeout(() => {
    callback(data);
  }, 2000);
};

const displayData = (data) => {
  console.log(data);
};

getData(displayData);

const data = [
    "Harry",
    "Ross",
    "Bruce",
    "Cook",
    "Carolyn",
    "Morgan",
    "Albert",
    "Walker",
    "Randy",
    "Reed",
    "Larry",
    "Barnes",
    "Lois",
    "Wilson",
    "Jesse",
    "Campbell",
    "Ernest",
    "Rogers",
    "Theresa",
    "Patterson",
    "Henry",
    "Simmons",
    "Michelle",
    "Perry",
    "Frank",
    "Butler",
    "Shirley"
  ];
  
  const getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  };
  
  getData()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

  

  