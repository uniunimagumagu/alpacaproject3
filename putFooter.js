"use strict";
function putFooter(){
    $.ajax({/*非同期読み込みらしい*/
        url: "footer.html",
        cache: false,
        success: function(html){
            document.getElementById("footerArea").innerHTML = html
            console.log("footer loaded")
        }
    });
}