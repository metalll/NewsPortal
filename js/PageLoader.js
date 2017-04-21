/**
 * Created by NSD on 21.04.17.
 */
function PageLoader(url,relative) {

    var preloader="<div class=\"row\">";
    preloader += "   <div id=\"global_preloader_div\" class=\" col s12 m12 l12 center center-align\">";
    preloader += "";
    preloader += "";
    preloader += "        <img id=\"global_preloader\" src=\"images\/bx_loader.gif\">";
    preloader += "   <\/div> <\/div>";

    document.getElementById('page_content').innerHTML=preloader;


    var finalUrl = '';




    finalUrl += window.location.protocol+ '//' ;


    if(relative==true){


        finalUrl   += window.location.host + "/NewsPortal/" + url;


    }else{

        finalUrl += url

    }





    $.ajax({
        url: finalUrl,
        type:'GET',
        cache: true,
        success: function(html){
            document.getElementById('page_content').innerHTML= html;
        }
    });

}

