            /*
         * These block of code handles Populating the side navigation content
         * The goal is to avoid REPETITION
         *
        /*  (1. )  Side Navigation Content Handling
         *  (2. ) Affix ScrollSpy Content Handling
         */
       
        
        //------------------(2. ) Affix ScrollSpy Content Handling-----------
        //select all class with .panel
        var panels = document.querySelectorAll('.panel'); 
        var h3s = document.querySelectorAll('.panel h3');
        var doclist = document.getElementById("doclist");
        
        //Start building the affixScroll
        var docHTML = "<ul class='nav navbar-nav'>\n  <li><a href='#top'><b>TOP</b></a></li>\n";
        //var docHTML = "<ul>\n";
         //for each of the panel class                                                  
        for(var i = 0 ; i < h3s.length; i++ ){
            //set ids
            panels[i].id = "s_"+i; 
            h3s[i].id = "h3_"+i;
            
            var h4s = document.querySelectorAll('#s_'+ i +' h4');
            //build the list with the h3 content
            docHTML += "<li>\n";
            docHTML+= "<a href='#"+ h3s[i].id +"'>"+h3s[i].innerHTML+"</a>\n";
            
            if(h4s !== ""){
                docHTML+=  "<ul class='nav navbar-nav sub'>";
               for(var j = 0; j < h4s.length; j++){
                        h4s[j].id = "h4_"+i+""+j;
                        docHTML += "<li>\n";
                        docHTML+= "<a href='#"+ h4s[j].id +"'>"+h4s[j].innerHTML+"</a>\n";
                        docHTML += "</li>\n";
                    }
               docHTML+=  "</ul>";
            }
            else
            {
                docHTML+= "";
            }
            
            docHTML += " </li>\n";
            
            
         }//End for panels.len
         //End building the affixScroll and place into #doclist

         docHTML+= "<li><a href='#bottom'><b>BOTTOM</b></a></li>\n </ul>\n"; 
         console.log(docHTML);
         
         doclist.innerHTML = docHTML;
         
        


$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar"});   

  // Add smooth scrolling on all links inside the navbar
  $("#affixScrollNav a").on('click', function(event) {
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

/*This handles the Open and Closing of the side Navigation
 * 
 * @param {type} sidenavCase
 * @returns {undefined}
 */
    var mySidenav = document.getElementById("mySidenav");
    var main      = document.getElementById("main");
    var btnNav    = document.getElementById("btnNav");
    var close     = document.getElementById("close");
    var open      = document.getElementById("open");
    
    // Make Sure the SideNav is open when first loaded
    mySidenav.style.width = '200px';
    main.style.marginLeft = '200px';
    btnNav.style.marginLeft = '200px';
    
function openNav(sidenavCase) {
    var width = '200px';
    switch(sidenavCase){
        /*Side Overlay*/
        case "SO":
            mySidenav.style.width = width;
            break;
        /*Push Content*/
        case "PC":
            mySidenav.style.width = width;
            main.style.marginLeft = width;
            btnNav.style.marginLeft = width;
            close.style.display = "inline";
            open.style.display = "none";
            
            break;
         /*Full-width*/  
        case "FW":
           mySidenav.style.width = "100%";
           break;
        /*Push Content with opacity*/    
        default :
            mySidenav.style.width = width;
            main.style.marginLeft = width;
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
