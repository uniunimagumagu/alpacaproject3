"use strict";
function putHeader(){
    $.ajax({/*非同期読み込みらしい*/
        url: "header.html",
        cache: false,
        success: function(html){
            /*document.write(html);*/
            document.getElementById("header").innerHTML=html
            console.log("header loaded")
        }
    });
}