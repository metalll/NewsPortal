/**
 * Created by NSD on 19.05.17.
 */




var newsLoadedData = null;

function loadNews() {
    
    if(newsLoadedData==null){
        downloadNews();
    }else{
        parseNews();
    }
    
    
    
    
    
}
var pressId = 1;
var isNext=true;

var articles = [];


function downloadNews() {

    //https://ejournal.tool.vmcl.ru/service/popularArticles/?pressId=372&bitrixId=0

    if(isNext === false&&pressId > 5){ parseNews();  return;}






    $.ajax({
        url: 'https://ejournal.tool.vmcl.ru/service/popularArticles/?pressId='+1+'&bitrixId=900',
        cache:false,
        type: "GET",

        success: function (data) {
            var tnewsLoadedData = {};
            console.log(data);

            try {
                tnewsLoadedData = JSON.parse(data);
            }catch (e){
                tnewsLoadedData = JSON.parse(JSON.stringify(data));
            }

            if(tnewsLoadedData.articles.length>0&&tnewsLoadedData.articles!=null&&tnewsLoadedData.articles!=undefined) {
                pressId++;
            }

            if(newsLoadedData===null){
                newsLoadedData = tnewsLoadedData;
                articles = tnewsLoadedData.articles;
            }else{
                articles.join(tnewsLoadedData.articles);
            }


            parseNews();


        }

    });


}

function parseNews() {

    var tempVal = [];

    var tempVal = articles;
    console.log("temp val");
    console.log(tempVal);



    var newsContainer = null;

    try{
        newsContainer =  document.getElementById('news_container');
    }catch (e){
        newsContainer = null;
    }

    if(newsContainer==null)return;

    var newsView="";

    newsView += " <h3 class=\"center white-text\">Новости<\/h3>";
    newsView += "        <ul class=\"collection\">";

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






    for(var i=0;i<tempVal.length;i++){

        var headerItem = tempVal[i].header;
        var urlItem = tempVal[i].url;









        newsView += "            <li class=\"collection-item avatar\">";
        newsView += "                <img src=\"img\/dark_logo.png\" alt=\"\" class=\"circle\">";
        newsView += "                <span class=\"title indigo-text text-darken-4 \"><\/span>";
        newsView += "                <p style=\"width: 77%; font-size: 15px\">"+headerItem+"<br>";
        newsView += "                <span class=\"right right-align\" style=\"font-size: 11px\">"+today+"<\/span>";
        newsView += "                    <br>";
        newsView += "                <\/p>";
        newsView += "                <a href=\""+urlItem+"\" class=\"secondary-content \"><i class=\"material-icons small black-text\">more_vert<\/i><\/a>";
        newsView += "            <\/li>";
        newsView += "";
        newsView += "";











    }

    newsView += "        <\/ul>";


    newsContainer.innerHTML = newsView;



}