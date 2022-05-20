var i = 0;
const shownext = () => {
   if(i===0){
       document.getElementById("top-l").style.backgroundImage = "url(images/desktop-image-hero-2.jpg)"
   }else if( i===1){
    document.getElementById("top-l").style.backgroundImage = "url(images/desktop-image-hero-3.jpg)"
   }else if (i===2){
    document.getElementById("top-l").style.backgroundImage = "url(images/desktop-image-hero-1.jpg)"

   }

   document.getElementsByClassName("one")[i].style.display="none";
   if(i===2){
       i=0;
       document.getElementsByClassName("one")[i].style.display="block";
   }else{document.getElementsByClassName("one")[++i].style.display="block";}
   

}
const showprev = () => {
    if(i===0){
        document.getElementById("top-l").style.backgroundImage = "url(images/desktop-image-hero-2.jpg)"
    }else if( i===1){
     document.getElementById("top-l").style.backgroundImage = "url(images/desktop-image-hero-3.jpg)"
    }else if (i===2){
     document.getElementById("top-l").style.backgroundImage = "url(images/desktop-image-hero-1.jpg)"
 
    }
    document.getElementsByClassName("one")[i].style.display="none";
   if(i===0){
       i=2;
       document.getElementsByClassName("one")[i].style.display="block";
   }else{document.getElementsByClassName("one")[--i].style.display="block";}
}
document.getElementById("prev").addEventListener("click",showprev);
document.getElementById("next").addEventListener("click",shownext);



window.addEventListener('resize', function(event){
   
    if(window.innerWidth > 700){
        var width = document.getElementById("top-l").offsetWidth;
        var height = document.getElementById("top-r").offsetHeight;
        var btnheight =  document.getElementById("c-btn").offsetHeight;
        
        document.getElementById("c-btn").style.position = "absolute"; 
        
        document.getElementById("c-btn").style.left = width + "px";
        document.getElementById("c-btn").style.top = (height-btnheight) + "px";
    } else {

       
        var height =  document.getElementById("top-l").offsetHeight;
        var btnheight =  document.getElementById("c-btn").offsetHeight;
        document.getElementById("c-btn").style.position = "absolute"; 
        
        document.getElementById("c-btn").style.right = 0 + "px";
        document.getElementById("c-btn").style.top = (height-btnheight) + "px";

    }
});


    window.addEventListener('load', (event) => {
       
        if(window.innerWidth > 700){
            var width = document.getElementById("top-l").offsetWidth;
            var height = document.getElementById("top-r").offsetHeight;
            var btnheight =  document.getElementById("c-btn").offsetHeight;
            
            document.getElementById("c-btn").style.position = "absolute"; 
            
            document.getElementById("c-btn").style.left = width + "px";
            document.getElementById("c-btn").style.top = (height-2*(btnheight)) + "px";
        } else {

           
            var height =  document.getElementById("top-l").offsetHeight;
            var btnheight =  document.getElementById("c-btn").offsetHeight;
            document.getElementById("c-btn").style.position = "absolute"; 
            
            document.getElementById("c-btn").style.right = 0 + "px";
            document.getElementById("c-btn").style.top = (height-btnheight) + "px";

        }
      
      });

      const shownav = () => {
          document.getElementsByClassName("nav-div")[0].style.display="none"
          document.getElementsByClassName("show-nav")[0].style.display="block";
      }
      const closenav = () => {
        document.getElementsByClassName("show-nav")[0].style.display="none";
        document.getElementsByClassName("nav-div")[0].style.display="block"
      }

  document.getElementById("show-n").addEventListener("click",shownav);
  document.getElementById("close-n").addEventListener("click",closenav);