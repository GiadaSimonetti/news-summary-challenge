console.log(1);
var articles;

document.getElementById('btn-search').addEventListener('click', function () {

  var keyWord = document.getElementById('endpoint-input').value;

  var url = 'http://content.guardianapis.com/search?q=' + keyWord + '&api-key=8fbe3387-82a7-48f8-ac66-288fe4f5c0f2';
console.log(2, url);
  httpGetAsync(url, handleResponse);

  console.log(3);

});

function handleResponse(mary) {
  console.log('callback1', mary);
  var txt = document.createTextNode(articles.response.results[0].webTitle);
  console.log(txt);
  var table = document.getElementById("headlines-articles-table");
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  var td2 = document.createElement("td");
    
  td.appendChild(txt);
  tr.appendChild(td);
  tr.appendChild(td2);
  table.appendChild(tr);
}

console.log(4);
function httpGetAsync(theUrl, bob) {
  var request = new XMLHttpRequest();

  console.log(5);
  request.onreadystatechange = function() {
    console.log(6);
    if (request.readyState == 4) {
      if (this.status >= 200 && this.status < 400) {
        console.log(7);
        articles = JSON.parse(request.responseText);
        bob(articles);
      } else {
        console.log(8);
        return ":(";
      }
    }
  };
  console.log(9);
  request.open("GET", theUrl, true); // true for asynchronous

  console.log(10);
  request.send(null);
}
console.log(11);
