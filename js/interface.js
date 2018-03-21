var articles;

document.getElementById("btn-search").addEventListener("click", function() {
  var keyWord = document.getElementById("endpoint-input").value;

  var url =
    "http://content.guardianapis.com/search?q=" +
    keyWord +
    "&api-key=8fbe3387-82a7-48f8-ac66-288fe4f5c0f2";
  console.log(1, url);
  httpGetAsync(url, handleResponse);
});

function handleResponse(item) {
  console.log("callback1", item);
  var txt = document.createTextNode(articles.response.results[0].webTitle);
  console.log(2, txt);
  var webUrl = document.createTextNode(articles.response.results[0].webUrl);
  var table = document.getElementById("headlines-articles-table");
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  var td2 = document.createElement("td");

  // var arr = articles.response.results
  //   var posts = arr.map((news, index) => (
  //       key={index}
  //       id={news.id}
  //       title={news.title}
  //       author={news.author}
  //   ));

  // var a = document.createElement("a");

  td.appendChild(txt);
  tr.appendChild(td);
  tr.appendChild(td2);
  // a.setAttribute('id', 'number-' + notepad.notes.length);
  // a.setAttribute("href", "#" + articles.response.results[0].webUrl);
  // td2.appendChild(a);
  table.appendChild(tr);
}

function httpGetAsync(theUrl, callBack) {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      if (this.status >= 200 && this.status < 400) {
        articles = JSON.parse(request.responseText);
        callBack(articles);
      } else {
        return ":(";
      }
    }
  };
  request.open("GET", theUrl, true); // true for asynchronous

  request.send(null);
}
