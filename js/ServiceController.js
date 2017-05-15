/**
 * Created by NSD on 15.05.17.
 */

var loadedServiceElements = new Object();

function loadServices() {
    console.log('start to load');
   sevicesJson();

}


function sevicesJson() {
    var hrefLoading = "";
    hrefLoading += window.location.protocol+"";
    hrefLoading += "//pbezpeka.herokuapp.com/API/Service";

    console.log('url to load:' + hrefLoading);


    $.ajax({
        url: hrefLoading,
        type: "GET",
        success: function (data) {
            loadedServiceElements = JSON.parse(data).values;



            console.log("Serives JSON :" + loadedServiceElements);
            console.log(loadedServiceElements);
            serviceParsing();
        }

    });



}

function serviceParsing() {

    var seviceContainer = document.getElementById('service-container');


    var serviceHtml = "";

    serviceHtml += '<div class=\"row\">';



    for(var i=0;i<loadedServiceElements.length;i++){
       var j =  loadedServiceElements.length-i-1;
        console.log("elements:" + (i+1) + " other:" + j);

        var elC = i+1;





        serviceHtml += "   <div class=\"row col s12 m12 l4\">";
        serviceHtml += "                <div class=\"col s12 m12 l12\">";
        serviceHtml += "                    <div class=\"hoverable medium card\">";
        serviceHtml += "                        <div class=\"card-image\">";
        serviceHtml += "                            <img class=\"center center-align\" style = \" object-fit: cover;  height:200px;\"  src=\""+loadedServiceElements[i].image+"\">";
        serviceHtml += "                            <span class=\"card-title center backgr-col center-align \" style=\"font-size: 125%\">"+loadedServiceElements[i].headerText+"<\/span>";
        serviceHtml += "                        <\/div>";
        serviceHtml += "                        <div class=\"card-content\">";
        serviceHtml += "                            <p>"+loadedServiceElements[i].minimalDescription+"<\/p>";
        serviceHtml += "";
        serviceHtml += "                        <\/div>";
        serviceHtml += "                        <div class=\"card-action center-align \">";
        serviceHtml += "                            <p> <a href=\"javascript:void(0);\" onclick=\""+loadedServiceElements[i].content+"\" class=\"waves-effect col s12 waves-light blue darken-4 btn\">Подробнее<\/a>  <\/p>";
        serviceHtml += "                        <\/div>";
        serviceHtml += "                    <\/div>";
        serviceHtml += "                <\/div>";
        serviceHtml += "            <\/div>";



        if(elC%3==0&&j<=3){
            if(j==3){  }
            if(j==2){
                serviceHtml += "<div class=\"col l2\"><\/div>";
            }
            if(j==1){
                serviceHtml += "<div class=\"col l4\"><\/div>";
            }
        }

    }



    serviceHtml += '<\/div>';


    console.log(serviceHtml);

    seviceContainer.innerHTML = serviceHtml;

}