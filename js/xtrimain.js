/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar"});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

/*== Sidenav  ==*/
/* Set the width of the side navigation to 250px */
function openNav(sidenavCase) {
    var width = '250px';
    switch(sidenavCase){
        /*Side Overlay*/
        case "SO":
            document.getElementById("mySidenav").style.width = width;
            break;
        /*Push Content*/
        case "PC":
            document.getElementById("mySidenav").style.width = width;
            document.getElementById("main").style.marginLeft = width;
            document.getElementById("btnNav").style.marginLeft = width;
            document.getElementById("close").style.display = "inline";
            document.getElementById("open").style.display = "none";
            
            break;
         /*Full-width*/  
        case "FW":
           document.getElementById("mySidenav").style.width = "100%";
           break;
        /*Push Content with opacity*/    
        default :
            document.getElementById("mySidenav").style.width = width;
            document.getElementById("main").style.marginLeft = width;
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)";  
            break;
    }
            
    
}
/* Set the width of the side navigation to 0 */
function closeNav(sidenavCase) {
   switch(sidenavCase){
       /*Side Overlay*/
       case "SO": document.getElementById("mySidenav").style.width = "0";
           break;
       /*Push Content*/
       case "PC":  
           document.getElementById("mySidenav").style.width = "0";
           document.getElementById("main").style.marginLeft = "0";
           document.getElementById("btnNav").style.marginLeft ="0";
           document.getElementById("close").style.display = "none";
           document.getElementById("open").style.display = "inline";
           break;
        /*Full width*/
        case "FW":
           document.getElementById("mySidenav").style.width = "0";
           break;
       /*Push Content with opacity*/
       default :
           document.getElementById("mySidenav").style.width = "0";
           document.getElementById("main").style.marginLeft = "0";
           document.body.style.backgroundColor = "#323232";
           break;
           }
           
}