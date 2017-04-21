/**
 * Created by NSD on 21.04.17.
 */


var navigationStack = [];

function PageLoader(url,relative) {



    if(navigationStack==[]||navigationStack.size==0||navigationStack==null){

        var navigationItem = new Object();
        navigationItem.url = 'index.html';
        navigationItem.relative = true;

        navigationStack.push(navigationItem);

    }



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





            var navigationItem = new Object();
            navigationItem.url = url;
            navigationItem.relative = relative;
            navigationStack.push(navigationItem);

            document.getElementById('page_content').innerHTML= html;
            if(url.indexOf('index_content')){
                index_content();
            }
            if(document.getElementsByClassName('collapsible')!=null){
                console.log( document.getElementsByClassName('collapsible'));
                $('.collapsible').collapsible();
            }

            if(document.getElementsByClassName('modal')!=null){

                $('.modal').modal({
                        dismissible:true,
                        // Modal can be dismissed by clicking outside of the modal
                        opacity: .8, // Opacity of modal background
                        inDuration: 100, // Transition in duration
                        outDuration: 100, // Transition out duration
                        // Ending top style attribute
                        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
                            //    alert("Ready");
                            console.log(modal, trigger);
                        },
                        complete: function() { // alert('Closed');
                        } // Callback for Modal close
                    }
                );
            }

            if(document.getElementsByClassName('carousel')!=null&&document.getElementsByClassName('carousel.carousel-slider')){
                $('.carousel').carousel(
                    {   duration:100,
                        dist:-60,
                        padding:10,
                        indicators:true,
                        shift:100,

                    }

                );


                $('.carousel.carousel-slider').carousel({fullWidth: true});
                autoplay();
                function autoplay() {
                    if(!caruselBoolFlag){
                        $('.carousel').carousel('next');
                    }else {

                        caruselBoolFlag = false;
                    }
                    setTimeout(autoplay, 5500);
                }


            }

            jQuery.ready();
        }
    });

}



function goBack() {
    var navItem = navigationStack.pop();
    if (navItem!=null) {


        PageLoader(navItem.url,navItem.relative);

        //load content with ajax
    }


};




window.addEventListener('popstate', function (e) {
    var state = e.state;
    if (state !== null) {
        goBack();
    }
});
