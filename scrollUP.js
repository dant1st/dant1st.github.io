window.onscroll = function() {
  var scrollElem = document.getElementById("scrollToTop");
  if (window.pageYOffset > window.innerHeight*0.9) {
     scrollElem.style.opacity = "0.75";
  } else {
      scrollElem.style.opacity = "0";
  }  
} 

var timeOut;
function goUp() {
   var top = Math.max(window.pageYOffset,document.documentElement.scrollTop);
   if(top > 0) {
      window.scrollBy(0,-100);
      timeOut = setTimeout('goUp()',20);
   } else clearTimeout(timeOut);
} 
