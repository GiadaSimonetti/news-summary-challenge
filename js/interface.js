

document.getElementById('btn-search').addEventListener('click', function () {

  var keyWord = document.getElementById('endpoint-input').value;
  var table = document.getElementById("headlines-articles-table");
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  var td2 = document.createElement("td");
  var url = 'http://content.guardianapis.com/search?q=' + keyWord + '&api-key=8fbe3387-82a7-48f8-ac66-288fe4f5c0f2';
  var articles;

  httpGetAsync(url);
  var txt = document.createTextNode(articles.response);

  td.appendChild(txt);
  tr.appendChild(td);
  tr.appendChild(td2);
  table.appendChild(tr);


});


function httpGetAsync(theUrl) {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      if (this.status >= 200 && this.status < 400) {
        articles = JSON.parse(request.responseText);
      } else {
        return ":(";
      }
    }
  };
  request.open("GET", theUrl, true); // true for asynchronous


  request.send(null);
}
