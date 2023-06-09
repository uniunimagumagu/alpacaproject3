"use strict";
function putFooter(){
    $.ajax({/*非同期読み込みらしい*/
        url: "footer.html",
        cache: false,
        success: function(html){
            /*document.write(html);*/
            document.getElementById("footer").innerHTML = html
        }
    });
}