const URI = "https://reqres.in/api/users/";

function getUsers() {
  fetch(URI)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (obj) {
      console.log(obj);
    })
    .catch(function (error) {
      console.error(error);
    });
}

getUsers();
