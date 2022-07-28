let movieList = [
  {
    title: "범죄도시 2",
    actors: ["마동석", "손석구"],
  },
  {
    title: "마녀 2",
    actors: ["신시아", "박은빈"],
  },
  {
    title: "외계+인",
    actors: ["류준열", "김우빈"],
  },
];

function fetchData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let movieTitleList = movieList.map((movie) => movie.title);
      let idx = movieTitleList.indexOf(data);
      if (idx !== -1) {
        resolve(movieList[idx].actors);
      } else {
        reject("영화가 없습니다.");
      }
    }, 3000);
  });
}

function getData(data) {
  let result;
  setTimeout(function () {
    let movieTitleList = movieList.map((movie) => movie.title);
    let idx = movieTitleList.indexOf(data);
    if (idx !== -1) {
      result = movieList[idx];
    } else {
      result = "영화가 없습니다.";
    }
  }, 3000);
  return result;
}

fetchData("범죄도시 2").then((res) => console.log("영화(promise) : ", res));
getData("범죄도시 2");
