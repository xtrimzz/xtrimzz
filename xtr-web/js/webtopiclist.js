 
        // -------------(1. )  Side Navigation Content Handling---------
        var mySidenav = document.getElementById("mySidenav");// get id mySidenav
        var topicList = new Object();           //create a list/dict containing topics
        var topicConcat = "";                   //create variable to contain the list
            //Populating the list
            topicList.gen = [ 
                                "BOOTSTRAP ",
                            ];
            topicList.js =[
                                "JAVASCRIPT TOPICS",
                                
                           ];
                           
         //build up the navigation contain  
         for(var ppt in topicList){
             //Place an topic header
             topicConcat += "<p style='color:#00ff80;margin-left: 10px'><strong>"+ topicList[ppt][0] +"</strong></p>";
            //for each topic,
             for(var i= 1; i < topicList[ppt].length; ++i){
               // split topic string @ space
               split = topicList[ppt][i].split(" ");
               
               //If the string is single, just assign 
               if (split.length > 0) {
                    htmlConcat = split.join("-");
                }else{ htmlConcat = topicList[ppt][i];}
                
                //build the link up
                topicConcat += "<a href='"+htmlConcat.toLowerCase()+".html'>"+ topicList[ppt][i] +"</a>";
             }//END for topicList[ppt].len
         }//END for var ppt in
         
         //put the built content in mySidenav
        mySidenav.innerHTML = topicConcat; 
        

