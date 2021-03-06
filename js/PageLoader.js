/**
 * Created by NSD on 21.04.17.
 */


var navigationStack = [];

var isBack=false;

function setLocation(curLoc){
    try {
        history.pushState("no null state", "НИУККЦПБ", curLoc);
        return;
    } catch(e) {}
    location.hash = '#' + curLoc;
}

function PageLoader(url,relative) {


    isBack = false;
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

    if(relative==true){


    finalUrl += window.location.protocol+ '//' ;





        finalUrl   += window.location.host + "/NewsPortal/" + url;


    }else{



        finalUrl += url;


    }






    $.ajax({
        url: finalUrl,
        type:'GET',
        cache: true,
        success: function(html){


            var tempLoc = window.location.protocol + '//';
            tempLoc += window.location.host;
            tempLoc += '/NewsPortal/index.html?page=';
            tempLoc += url;

            setLocation(tempLoc);







            if(document.getElementById('autocomplete-input').value != ""|| document.getElementById('autocomplete-input').value != null){
                document.getElementById('autocomplete-input').value = "";

                if($('#page_content').hasClass('hide')){

                $('#search_result').addClass('hide');
                $('#page_content').removeClass('hide');
                }

            }

            // if(document.getElementById('autocomplete-input_mobile').value != ""|| document.getElementById('autocomplete-input_mobile').value != null){
            //     document.getElementById('autocomplete-input_mobile').value = "";
            //
            //     if($('#mob_company').hasClass('hide')){
            //         $('#search_result_mobile').addClass('hide');
            //         $('#mob_company').removeClass('hide');
            //         $('#mob_services').removeClass('hide');
            //         $('#mob_news').removeClass('hide');
            //         $('#mob_career').removeClass('hide');
            //         $('#mob_contacts').removeClass('hide');
            //
            //
            //
            //     }
            //     $('.button-collapse').sideNav('hide');
            // }



            var navigationItem = new Object();
            navigationItem.url = url;
            navigationItem.relative = relative;
            navigationStack.push(navigationItem);

            document.getElementById('page_content').innerHTML= html;

            if(document.getElementsByClassName('collapsible')!=null){
                console.log( document.getElementsByClassName('collapsible'));
                $('.collapsible').collapsible();
            }

            if(finalUrl.indexOf("services")!== -1||finalUrl.indexOf("index")!== -1){

                console.log('loading services....');

                loadServices();
            }

            if(finalUrl.indexOf("career")!== -1){

                $('.tap-target').tapTarget('open');
            }

            if(finalUrl.toLowerCase().indexOf("news".toLowerCase())!== -1||finalUrl.indexOf("index")!== -1){

                console.log('loading news....');

                loadNews();
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
               // autoplay();
               //  function autoplay() {
               //      if(!caruselBoolFlag){
               //          $('.carousel').carousel('next');
               //      }else {
               //
               //          caruselBoolFlag = false;
               //      }
               //      setTimeout(autoplay, 5500);
               //  }
               //

            }


            $('select').material_select();


        }
    });

}



function Back(url,relative) {






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



        finalUrl += url;


    }






    $.ajax({
        url: finalUrl,
        type:'GET',
        cache: true,
        success: function(html){



console.log("loading back");






            if(document.getElementById('autocomplete-input').value != ""|| document.getElementById('autocomplete-input').value != null){
                document.getElementById('autocomplete-input').value = "";

                if($('#page_content').hasClass('hide')){

                    $('#search_result').addClass('hide');
                    $('#page_content').removeClass('hide');
                }

            }

            // if(document.getElementById('autocomplete-input_mobile').value != ""|| document.getElementById('autocomplete-input_mobile').value != null){
            //     document.getElementById('autocomplete-input_mobile').value = "";
            //
            //     if($('#mob_company').hasClass('hide')){
            //         $('#search_result_mobile').addClass('hide');
            //         $('#mob_company').removeClass('hide');
            //         $('#mob_services').removeClass('hide');
            //         $('#mob_news').removeClass('hide');
            //         $('#mob_career').removeClass('hide');
            //         $('#mob_contacts').removeClass('hide');
            //
            //
            //
            //     }
            //     $('.button-collapse').sideNav('hide');
            // }



            var navigationItem = new Object();
            navigationItem.url = url;
            navigationItem.relative = relative;
            navigationStack.push(navigationItem);

            document.getElementById('page_content').innerHTML= html;

            if(document.getElementsByClassName('collapsible')!=null){
                console.log( document.getElementsByClassName('collapsible'));
                $('.collapsible').collapsible();
            }

            if(finalUrl.indexOf("services")!== -1||finalUrl.indexOf("index")!== -1){

                console.log('loading services....');

                loadServices();
            }

            if(finalUrl.toLowerCase().indexOf("news".toLowerCase())!== -1||finalUrl.indexOf("index")!== -1){

                console.log('loading news....');

                loadNews();
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
                // autoplay();
                //  function autoplay() {
                //      if(!caruselBoolFlag){
                //          $('.carousel').carousel('next');
                //      }else {
                //
                //          caruselBoolFlag = false;
                //      }
                //      setTimeout(autoplay, 5500);
                //  }
                //

            }


            $('select').material_select();


        }
    });

}


function goBack() {

    isBack = true;
    var navItem = navigationStack.pop();
    if (navItem!=null) {
        console.log('back listener');
        Back(navItem.url,navItem.relative);

        //load content with ajax
    }
};


$(window).on('hashchange', function() {



    if(isBack){

        var backURL = getUrlParameter('page');

        if(backURL!=null){

            Back(backURL,true);

        }



    }

});



window.addEventListener('popstate', function (e) {


    window.location.reload();
    isBack = true;
        goBack();

});
