var article_width = screen.width-220;

$(".article").width(article_width);
//document.getElementsByClassName("page").style.width = "70%";

var count=0;

function myFunction() {
  var x = document.getElementById("mySecnav");
  if (x.className === "secnav") {
      x.className += " responsive";
  } else {
      x.className = "secnav";
  }
}
function openNav() {
//  document.getElementById("mySidebar").style.width = "220px";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myHidebar").style.display = "none";
  document.getElementById("myArticle").style.width = article_width;
  document.getElementById("myArticle").style.marginLeft = "220px";
  
  var x = document.getElementsByClassName('page');
  for(var i=0; i< x.length;i++){
    x[i].style.width = "80%";
  }
  count=1
}
function closeNav() {
//  document.getElementById("mySidebar").style.width = "0px";

  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myHidebar").style.display = "block";
  document.getElementById("myArticle").style.width = "100%";
  document.getElementById("myArticle").style.marginLeft = "0";

  var x = document.getElementsByClassName('page');
  for(var i=0; i< x.length;i++){
    x[i].style.width = "75%";
  }
}