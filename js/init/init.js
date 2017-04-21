/**
 * Created by NSD on 21.04.17.
 */
function index_content() {

    var caruselBoolFlag = true;

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