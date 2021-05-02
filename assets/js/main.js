// Create a request variable and assing a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
var repoHTML = "";

//Open a new connection, using the GET request on the API endpoint.
request.open("GET", "https://api.github.com/users/Hakkelo89/repos", true);

request.onload = function () {
  //Begin accesing JSON data here
  const data = JSON.parse(this.response);
  var repoCards = document.getElementById("repos");
  repoCards.innerHTML = "";

  console.log(data);

  repoCards.innerHTML +=
    "<h2>" +
    "My Projects" +
    "</h2>" +
    "<section>" +
    '<div id="' +
    "icon-wrapper" +
    '">';
  $.each(data, function (i, repo) {
    console.log(repo.html_url);
    repoCards.innerHTML +=
      "<a target=" + "_blank" + "href=" + repo.html_url + ">";
    repoCards.innerHTML +=
      '<div class="' +
      "icons" +
      '">' +
      '<div class="' +
      "icon-slide-container" +
      '">';
    repoCards.innerHTML +=
      '<img class="' +
      'slide-icon"' +
      'alt="' +
      "Project Icon" +
      'height="' +
      '100"' +
      'src="' +
      repo.avatar_url +
      '"/>';
    repoCards.innerHTML += "</div>" + "</div>" + "</a>";
  });
  repoCards.innerHTML += "</section>";
};

//Send request
request.send();
