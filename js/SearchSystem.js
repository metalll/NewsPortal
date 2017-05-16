/**
 * Created by NSD on 19.04.17.
 */


window.onload=function () {


    $('#autocomplete-input_mobile').on('input', function () {

        var sender = $(this);
        var text = sender.val();

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
        }
    });


    $('#autocomplete-input').on('input', function () {

        var sender = $(this);
        var text = sender.val();

        if (text == '' || text == null) {

            $('#search_result').addClass('hide');
            $('#page_content').removeClass('hide');

            return false;

        } else {
            $('#search_result').removeClass('hide');
            $('#page_content').addClass('hide');

        }
        handleSearch(text);

    });


    function handleSearch(inputText) {





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

                    document.getElementById('search_result').innerHTML="hi";



                }

            });



        }


    }

};

