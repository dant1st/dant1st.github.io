document.addEventListener("DOMContentLoaded",  function() {
   const container= document.querySelectorAll('.Img-container');

   for (let i = 0; i < container.length; i++) {
      const content = container[i];
      console.log(content);
      content.addEventListener('mousemove',startRotate);
      content.addEventListener('mouseout',stopRotate);
   }
 
   function startRotate(event){
      const contentItem = this.querySelector('.Img-content');
      const halfHeight = contentItem.offsetHeight/2;
      const halfWidth = contentItem.offsetWidth/2;
      contentItem.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 50 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 60 + 'deg)';
   }

   function stopRotate(event){
      const contentItem = this.querySelector('.Img-content');
      contentItem.style.transform = 'rotate(0)';
   }
});