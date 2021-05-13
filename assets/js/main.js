// Create a request variable and assing a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
var repoHTML = "";

//Open a new connection, using the GET request on the API endpoint.
request.open("GET", "https://api.github.com/users/Hakkelo89/repos", true);

request.onload = function () {
  //Begin accesing JSON data here
  const data = JSON.parse(this.response);
  var repoCards = $("#repos");
  debugger;

  console.log(data);

  var h2 = document.createElement("h2");
  h2.innerHTML = "My Projects";
  repoCards.append(h2);

  var section = document.createElement("section");

  var projectsContainer = document.createElement("div");
  projectsContainer.id = "icon-wrapper";

  /* data.array.forEach(element => {
    var l = document.createElement('a');
    l.href = value.html_url;

    var i = document.createElement('div');
    i.className = "icons";
    var s = document.createElement('div');
    s.className = 'icon-slide-container';

    var imgS = document.createElement('img');
    imgS.className = "slide-icon";
    imgS.alt = "Project Icon";
    imgS.style.height = "100px";
    imgS.src = value.owner.avatar_url;

    s.appendChild(imgS);
    i.appendChild(s);
    l.appendChild(i);
    d.appendChild(l);
    
  });*/

  $.each(data, function (index, value) {
    const project = `<a
    target="_blank"
    href="${value.html_url}"
  >
    <div class="icons">
      <div class="icon-slide-container">
        <img
          class="slide-icon"
          alt="Project Icon"
          height="100"
          src="../images/project_${index}.png"
        />
      </div>
    </div>
  </a>`;

    projectsContainer.appendChild(project);
  });

  repoCards.append(section);
};

//Send request
request.send();
