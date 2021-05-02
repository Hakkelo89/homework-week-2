// Create a request variable and assing a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
var repoHTML = "";

//Open a new connection, using the GET request on the API endpoint.
request.open("GET", "https://api.github.com/users/Hakkelo89/repos", true);

request.onload = function () {
  //Begin accesing JSON data here
  const data = JSON.parse(this.response);
  console.log(data);

  repoHTML =
    "<h2>" +
    "My Projects" +
    "</h2>" +
    "<section>" +
    '<div id="' +
    "icon-wrapper" +
    '">';
  $.each(data, function (i, repo) {
    console.log(repo.html_url);
    repoHTML += "<a target=" + "_blank" + "href=" + repo.html_url + ">";
    repoHTML +=
      '<div class="' +
      "icons" +
      '">' +
      '<div class="' +
      "icon-slide-container" +
      '">';
    repoHTML +=
      '<img class="' +
      'slide-icon"' +
      'alt="' +
      "Project Icon" +
      'height="' +
      '100"' +
      'src="' +
      repo.avatar_url +
      '"/>';
    repoHTML += "</div>" + "</div>" + "</a>";
  });
  repoHTML += "</section>";
};

const repoCards = document.getElementsByClassName("projectSlider");

$("projectSlider").html = "";

$("projectSlider").html(repoHTML);

/*repoCards.html = "";

repoCards.html(repoHTML);*/

//Send request
request.send();
