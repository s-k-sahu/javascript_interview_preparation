//fetching api using XHR(XMLHttpRequest)
var request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();
request.onload = () => {
  console.log(JSON.parse(request.response));
};

//fetching api using jquery(AJAX)
$(document).ready(function () {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    type: "GET",
    success: function (result) {
      console.log(result);
    },
  });
});

//fetching api using Fetch()
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

//fetching api using axios
axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
  console.log(response.data);
});
