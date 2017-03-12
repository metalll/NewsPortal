$(document).ready(function () {



//
//<div class="col-md-4 text-center">
//                            <img src="img/1.jpg" alt="1">
//                            <h3>Нефть, Газ, Химия</h3>
//                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis dolor dolores
//                                ducimus, eveniet facilis fuga iste minus molestiae nemo, pariatur perferendis reiciendis
//                                vitae? Eveniet ex fugit nulla perspiciatis praesentium.</p>
//                            <button class="btn btn-primary">подробнее</button>
//                        </div>


    if ($("div").is(".center-block-info")) {
        $.ajax({
            url: "/API/Industry",
            type: "GET",

            success: function (data) {

                var jsonEx = JSON.parse(data);
                console.log("Industry JSON :" + jsonEx);
                console.log(jsonEx);

                for (var i = 0; i < jsonEx.values.elementsCount; i++) {

                    $(".center-block-info .row").append("<div class=\"col-md-4 text-center\">" +
                        "<img src=\"img/1.jpg\" alt=\"1\"> " +
                        "<h3>" + jsonEx.values[i].headerText + "</h3>" +
                        "<p>" + jsonEx.values[i].minimalDescription + "</p>"
                        + "</div>")
                }
            }

        });
    }

    // <li>
    // <div class="news-block-content">
    //     <b>20.00</b>
    //     <p>
    //     <a href="#"> Ad aspernatur eveniet, explicabo facere facilis, id
    // quam
    // quasi quis tempora vita</a>
    // </p>
    // </div>
    // </li>
    if ($("div").is(".news-block")) {
        $.ajax({

            url: "/API/News",

            type: "GET",

            success: function (data) {

                var jsonEx = JSON.parse(data);
                console.log("News JSON :" + jsonEx);
                console.log(jsonEx);
                // for (var i = 0; i < 3; i++) {
                //     $("#last-news").append("<li>" +
                //         "<div class=\"news-block-content\"> " +
                //         "<h3>" + jsonEx.values[i].headerText + "</h3>" +
                //         "<p>" + jsonEx.values[i].minimalDescription + "</p>" +
                //         "</div>"
                //         + "</li>")
                // }
            }

        });
    }

    // <div class="crsl-item">
    //     <a href="http://vk.com"><img src="img/client-banner.jpg"
    // alt="client-banner"></a>
    //     </div>
    if ($("div").is(".client-banner-content")) {

        $.ajax({
            url: "/API/Banner",
            type: "GET",

            success: function (data) {

                var jsonEx = JSON.parse(data);
                console.log("Banner JSON :" + jsonEx);
                console.log(jsonEx);
                $("#banner-corusel").append("<div class=\"crsl-items-banner\" data-navigation=\"navbtns-banner\">" +
                    "<div class=\"crsl-wrap\">"+
                    "<div class=\"banner-slider\">"+
                    +"</div>"
                    + "</div>"
                    + "</div>"
                );
                $(".crsl-wrap .banner-slider").empty();

                for (var banner in jsonEx.values) {
                    console.log("banner in loop" + banner);

                        $(".crsl-wrap .banner-slider").append("<div class=\"crsl-item\">" +
                            "<a href=\"#\"\"><img src=\"img/client-banner.jpg\" alt=\"client-banner\"></a>"
                            + "</div>")
                    }

                $(function () {
                    $('.crsl-items-banner').carousel({
                        visible: 7,
                        itemMinWidth: 180,
                        itemEqualHeight: 370,
                        itemMargin: 10,
                    });

                    $("a[href=#]").on('click', function (e) {
                        e.preventDefault();
                    });
                });
                }
            });
        };
      if ($("div").is(".service-slider")) {
            $.ajax({
                        url: "/API/Service",
                        type: "GET",

                        success: function (data) {

                            var jsonEx = JSON.parse(data);
                            console.log("Service JSON :" + jsonEx);
                            console.log(jsonEx);
                            // for (var i = 0; i < 3; i++) {
                            //     $("#last-news").append("<li>" +
                            //         "<div class=\"news-block-content\"> " +
                            //         "<h3>" + jsonEx.values[i].headerText + "</h3>" +
                            //         "<p>" + jsonEx.values[i].minimalDescription + "</p>" +
                            //         "</div>"
                            //         + "</li>")
                            // }
                        }

                    });
      }


    $('.bxslider').bxSlider({
        auto: true
    });
});
$(document).ready(function () {
    $('.bxslider1').bxSlider({
        auto: true
    });
});


$(function () {
    $('.crsl-items').carousel({
        visible: 3,
        itemMinWidth: 180,
        itemEqualHeight: 370,
        itemMargin: 1,
    });

    $("a[href=#]").on('click', function (e) {
        e.preventDefault();
    });
});

