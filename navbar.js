document.addEventListener("DOMContentLoaded",  function() {  
const container= document.querySelector('#nav-toggle');  
 
  container.addEventListener('click',function(){
      this.classList.toggle("navActive");      
      const contentItem= document.querySelector('.menu');      
      contentItem.classList.toggle("open");
      
  });
});