const URI = "https://reqres.in/api/users/";

function getUsers(n) {
  fetch(URI + n)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (obj) {
      getUserAvatar(obj.data.avatar);
      console.log(obj);
    })
    .catch(function (error) {
      console.error(error);
    });
}

function getUserAvatar(url) {
  fetch(url)
    .then((response) => response.blob())
    .then((img) => { 
      let myimg = document.getElementById("img");
      myimg.src = URL.createObjectURL(img);
      console.log(URL.createObjectURL(img)); 
    })
    .catch((e) => e);
}

getUsers(1);
