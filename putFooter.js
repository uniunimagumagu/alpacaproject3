"use strict";
function putFooter(){
    $.ajax({/*非同期読み込みらしい*/
        url: "footer.html",
        cache: false,
        success: function(html){
            /*document.write(html);*/
            console.log(html)
            document.getElementById("footer").innerHTML = html
        }
    });
}