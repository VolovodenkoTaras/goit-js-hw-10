const refs = {
  containerListRef: document.querySelector(".js-list"),
  guard: document.querySelector(".js-guard"),
  //   btnRef: document.querySelector(".js-button"),
};

// refs.btnRef.addEventListener("click", loadMore);

const ENDPOINT = "https://the-one-api.dev/v2/character";

const options = {
  headers: {
    Authorization: "Bearer 3sru3q0Sisxo4TsZOe23",
  },
};

let page = 1;

// function loadMore() {
//   page += 1;
//   searchHero(page).then((data) => {
//     renderMarkup(data.docs);
//     if (data.page === data.pages) {
//       refs.btnRef.hidden = true;
//     }
//   });
// }

function searchHero(page = 1) {
  return fetch(`${ENDPOINT}?page=${page}&limit=300`, options).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }
  );
}

searchHero()
  .then((data) => {
    renderMarkup(data.docs);
    observer.observe(refs.guard);
    // refs.btnRef.hidden = false;
  })
  .catch((error) => console.log(error));

function renderMarkup(arr) {
  const markup = arr
    .map(({ name, race }) => {
      return `<li>
          <h2>${name}</h2>
          <p>${race}</p>
        </li>`;
    })
    .join("");
  refs.containerListRef.insertAdjacentHTML("beforeend", markup);
}

const detals = {
  root: null,
  rootMargin: "300px",
};
const observer = new IntersectionObserver(onload, detals);

function onload(enteries) {
  //   console.log(enteries);
  enteries.forEach((entry) => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      page += 1;
      searchHero(page).then((data) => {
        renderMarkup(data.docs);
        if (data.page === data.pages) {
          observer.unobserve(refs.guard);
        }
      });
    }
  });
}

// console.log(screen.width);
