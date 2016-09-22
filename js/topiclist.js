 
        // -------------(1. )  Side Navigation Content Handling---------
        var mySidenav = document.getElementById("mySidenav");// get id mySidenav
        var topicList = new Object();           //create a list/dict containing topics
        var topicConcat = "";                   //create variable to contain the list
            //Populating the list
            topicList.gen = [ 
                                "FUNDAMENTALS ",
                                "setups",
                                "variables",
                                "Arrays",
                                "Functions"
                            ];
            topicList.js =[
                                "JAVASCRIPT TOPICS",
                                "Js Fundamental",
                                "Introduction topics"
                           ];
                           
         //build up the navigation contain                   
         for(var ppt in topicList){
             for(var i= 0; i < topicList[ppt].length; ++i){
               topicConcat += "<a href='#'>"+ topicList[ppt][i] +"</a>";
             }//END for topicList[ppt].len
         }//END for var ppt in
        mySidenav.innerHTML = topicConcat; //put content in mySidenav
        
        
