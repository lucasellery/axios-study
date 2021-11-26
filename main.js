const url = "http://localhost:5500/api";

const newUser = {
  name: "Lucas Ellery",
  avatar: "http://lorempixel.com/400/200/",
  city: "Fortal City",
};

const userUpdated = {
  name: "Kirito",
  avatar: "http://lorempixel.com/400/200/",
  city: "SAO",
};

const idToUpdate = 8;
const idToDelete = 12;
const idToGet = 8;

function getUser() {
  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      renderResults.textContent = JSON.stringify(data);
    })
    .catch((error) => console.log(error));
}

getUser();

function addNewUser() {
  axios
    .post(url, newUser)
    .then((response) => {
      alert(JSON.stringify(response.data));
    })
    .catch((error) => console.log(error));
}

// addNewUser();

function updateUser() {
  axios
    .put(`${url}/${idToUpdate}`, userUpdated)
    .then((response) => {
      alert(JSON.stringify(response.data));
    })
    .catch((error) => console.log(error));
}

// updateUser();

function deleteUser() {
  axios
    .delete(`${url}/${idToDelete}`)
    .then((response) => {
      alert(JSON.stringify(response.data));
    })
    .catch((error) => console.log(error));
}

// deleteUser();

function getOneUser() {
  axios
    .get(`${url}/${idToGet}`)
    .then((response) => {
      const data = response.data;
      renderResults.textContent = JSON.stringify(data);
    })
    .catch((error) => console.log(error));
}

getOneUser();
