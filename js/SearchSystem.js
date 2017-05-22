/**
 * Created by NSD on 19.04.17.
 */


window.onload=function () {


    $('#autocomplete-input_mobile').on('input', function () {

        var sender = $(this);
        var text = sender.val();


        var preloader_mob="";
        preloader_mob += "   <div id=\"search_result_mob_div\" class=\"col s12 m12 l12 center center-align\">";
        preloader_mob += "                    <h5 class=\"black-text center center-align\">Что удалось найти<\/h5>";
        preloader_mob += "                 <img id=\"mob_preloader\" src=\"images\/bx_loader.gif\">";
        preloader_mob += "                <\/div>";
        preloader_mob += "";



        document.getElementById('search_result_mobile').innerHTML= preloader_mob;


        if (text == '' || text == null) {
            $('#search_result_mobile').addClass('hide');
            $('#mob_company').removeClass('hide');
            $('#mob_services').removeClass('hide');
            $('#mob_news').removeClass('hide');
            $('#mob_career').removeClass('hide');
            $('#mob_contacts').removeClass('hide');





        } else {
            $('#search_result_mobile').removeClass('hide');
            $('#mob_company').addClass('hide');
            $('#mob_services').addClass('hide');
            $('#mob_news').addClass('hide');
            $('#mob_career').addClass('hide');
            $('#mob_contacts').addClass('hide');

            var inputText = text;


            var searchComponentUrl = "";

            searchComponentUrl+=window.location.protocol+'';
            searchComponentUrl+="//pbezpeka.herokuapp.com/API/Search?q=";
            searchComponentUrl+=inputText;

            if (inputText == '' || inputText == null){
                return;
            }else{
                $.ajax({
                    url:searchComponentUrl,
                    type: "GET",
                    success:function (data) {
                        jsonD = JSON.parse(data);


                        console.log(jsonD);
                        parseQueryServicesMobile(jsonD);




                        // document.getElementById('search_result_div').innerHTML="";





                    }

                });



            }

        }
    });


    $('#autocomplete-input').on('input', function () {

        var sender = $(this);
        var text = sender.val();

        if (text == '' || text == null) {

            $('#search_result').addClass('hide');
            $('#page_content').removeClass('hide');
            $('.carousel').carousel('next');
            return false;

        } else {
            $('#search_result').removeClass('hide');
            $('#page_content').addClass('hide');

        }
        handleSearch(text);

    });


    function handleSearch(inputText) {
        var preloader="<div class=\"row\">";
        preloader += "   <div id=\"preloader_div\" class=\" col s12 m12 l12 center center-align\">";
        preloader += "";
        preloader += "";
        preloader += "        <img id=\"preloader\" src=\"images\/bx_loader.gif\">";
        preloader += "   <\/div> <\/div>";

        document.getElementById('search_result_div').innerHTML =preloader;


        var searchComponentUrl = "";

        searchComponentUrl+=window.location.protocol+'';
        searchComponentUrl+="//pbezpeka.herokuapp.com/API/Search?q=";
        searchComponentUrl+=inputText;


        if (inputText == '' || inputText == null){
            return;
        }else{
            $.ajax({
                url:searchComponentUrl,
                type: "GET",
                success:function (data) {
                    jsonD = JSON.parse(data);

                    console.log(jsonD);
                    parseQueryServices(jsonD);

                }

            });



        }


    }

};


function parseQueryServicesMobile(dataQueryServiceMobile) {

    var seviceContainer = document.getElementById('search_result_mobile');


    var serviceHtml = "";
    serviceHtml +=" <h4 class=\"black-text center center-align\">Что удалось найти<\/h4>";
    serviceHtml += '<div class=\"row\">';






    for(var i=0;i<dataQueryServiceMobile.length;i++){

        serviceHtml += "   <div class=\"row col s12 m12 l4\">";
        serviceHtml += "                <div class=\"col s12 m12 l12\">";
        serviceHtml += "                    <div class=\"hoverable medium card\">";
        serviceHtml += "                        <div class=\"card-image\">";
        serviceHtml += "                            <img class=\"center center-align\" style = \" object-fit: cover;  height:200px;\"  src=\""+dataQueryServiceMobile[i].image+"\">";
        serviceHtml += "                            <span class=\"card-title center backgr-col center-align \" style=\"font-size: 125%\">"+dataQueryServiceMobile[i].headerText+"<\/span>";
        serviceHtml += "                        <\/div>";
        serviceHtml += "                        <div class=\"card-content\">";
        serviceHtml += "                            <p>"+dataQueryServiceMobile[i].minimalDescription+"<\/p>";
        serviceHtml += "";
        serviceHtml += "                        <\/div>";
        serviceHtml += "                        <div class=\"card-action center-align \">";
        serviceHtml += "                            <p> <a href=\"javascript:void(0);\" onclick=\""+dataQueryServiceMobile[i].content+"\" class=\"waves-effect col s12 waves-light blue darken-4 btn\">Подробнее<\/a>  <\/p>";
        serviceHtml += "                        <\/div>";
        serviceHtml += "                    <\/div>";
        serviceHtml += "                <\/div>";
        serviceHtml += "            <\/div>";





        // if(elC%3==0&&j<=3){
        //     if(j==3){  }
        //     if(j==2){
        //         serviceHtml += "<div class=\"col l2\"><\/div>";
        //     }
        //     if(j==1){
        //         serviceHtml += "<div class=\"col l4\"><\/div>";
        //     }
        // }

    }



    serviceHtml += '<\/div>';


    console.log(serviceHtml);

    seviceContainer.innerHTML = serviceHtml;




}

function parseQueryServices(dataQueryService) {
    var seviceContainer = document.getElementById('search_result_div');

    var searchInNews = false;
    if(newsLoadedData!=null){searchInNews=true;}



    var serviceHtml = "";
    serviceHtml +=" <h4 class=\"black-text center center-align\">Что удалось найти<\/h4>";
    serviceHtml += '<div class=\"row\">';





    for(var i=0;i<dataQueryService.length;i++){
        //
        // serviceHtml += "   <div class=\"row col s12 m12 l4\">";
        // serviceHtml += "                <div class=\"col s12 m12 l12\">";
        // serviceHtml += "                    <div class=\"hoverable medium card\">";
        // serviceHtml += "                        <div class=\"card-image\">";
        // serviceHtml += "                            <img class=\"center center-align\" style = \" object-fit: cover;  height:200px;\"  src=\""+dataQueryService[i].image+"\">";
        // serviceHtml += "                            <span class=\"card-title center backgr-col center-align \" style=\"font-size: 125%\">"+dataQueryService[i].headerText+"<\/span>";
        // serviceHtml += "                        <\/div>";
        // serviceHtml += "                        <div class=\"card-content\">";
        // serviceHtml += "                            <p>"+dataQueryService[i].minimalDescription+"<\/p>";
        // serviceHtml += "";
        // serviceHtml += "                        <\/div>";
        // serviceHtml += "                        <div class=\"card-action center-align \">";
        // serviceHtml += "                            <p> <a href=\"javascript:void(0);\" onclick=\""+dataQueryService[i].content+"\" class=\"waves-effect col s12 waves-light blue darken-4 btn\">Подробнее<\/a>  <\/p>";
        // serviceHtml += "                        <\/div>";
        // serviceHtml += "                    <\/div>";
        // serviceHtml += "                <\/div>";
        // serviceHtml += "            <\/div>";



        serviceHtml += "   <div class=\"row col s12 m12 l4\"  href=\"javascript:void(0);\" onclick=\""+dataQueryService[i].content+"\" >";
        serviceHtml += "    <div class=\"col s12 m12 l12\">";
        serviceHtml += "";
        serviceHtml += "                <div class=\"hoverable medium card\">";
        serviceHtml += "                    <div class=\"card-image\">";
        serviceHtml += "                        <img class=\"center center-align\" style=\" object-fit: cover;  height:200px;\" src=\""+dataQueryService[i].image+"\">";
        serviceHtml += "                        <span class=\"card-title center backgr-col center-align \" style=\"font-size: 125%\">"+dataQueryService[i].headerText+"<\/span>";
        serviceHtml += "                    <\/div>";
        serviceHtml += "                    <div class=\"card-content\">";
        serviceHtml += "                        <p>"+dataQueryService[i].minimalDescription+"<\/p>";
        serviceHtml += "                    <\/div>";
        serviceHtml += "                   <\/div>";
        serviceHtml += "            <\/div>";
        serviceHtml += "            <\/div>";






        // if(elC%3==0&&j<=3){
        //     if(j==3){  }
        //     if(j==2){
        //         serviceHtml += "<div class=\"col l2\"><\/div>";
        //     }
        //     if(j==1){
        //         serviceHtml += "<div class=\"col l4\"><\/div>";
        //     }
        // }

    }
    serviceHtml += '<\/div>';

    if(searchInNews){

        serviceHtml += "<div class=\"row\">";
        serviceHtml += "        <ul class=\"collection\">";

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd='0'+dd
        }

        if(mm<10) {
            mm='0'+mm
        }

        var fullMouth = "";

        switch (mm){
            case '01':
                fullMouth = 'января';
                break;
            case '02':
                fullMouth = 'ферваля';
                break;
            case '03':
                fullMouth = 'марта';
                break;
            case '04':
                fullMouth = 'апреля';
                break;
            case '05':
                fullMouth = 'мая';
                break;
            case '06':
                fullMouth = 'июня';
                break;
            case '07':
                fullMouth = 'июля';
                break;
            case '08':
                fullMouth = 'августа';
                break;
            case '09':
                fullMouth = 'сентября';
                break;
            case '10':
                fullMouth = 'октября';
                break;
            case '11':
                fullMouth = 'ноября';
                break;
            case '12':
                fullMouth = 'декабря';
                break;




        }



//    + " "+fullMouth+ " " + yyyy + " года";

        today = dd;
        today += " ";
        today += fullMouth;
        today += " ";
        today += yyyy;
        today += " года";







        var queryString = document.getElementById('autocomplete-input').value;

        for (var j=0;j<newsLoadedData.length;j++){

            if(newsLoadedData.indexOf(queryString)!==-1||newsLoadedData.indexOf(queryString)!==-1){






            }






        }







    }


    console.log(serviceHtml);

    seviceContainer.innerHTML = serviceHtml;



}



