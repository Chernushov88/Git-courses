document.title = `
- запустить систему сборки из материалов урока
- по желанию настроить eslint для своего редактора кода
- подключить стандартные библиотеки, например, jquery с поомщью npm i и import`

import $ from 'jquery';
 import 'slick-carousel';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/styles.css';
//import 'slick/slick.less';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';

console.log('jQuery - ', $);



$(function(){
    $(".slider").slick({
        // normal options...
        infinite: false,

        // the magic
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                dots: true
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });
    // $('.owl-carousel').owlCarousel();
});


let div = document.createElement('div');
document.body.append(div);
div.innerHTML = `
<hr>
<div class="timer1"></div>
<div data-slick='{"slidesToShow": 1, "slidesToScroll": 1}' class="slider">
    <div><img src="https://zephoria.com/wp-content/uploads/2014/08/online-community.jpg" alt=""></div>
    <div><img src="https://zephoria.com/wp-content/uploads/2014/08/online-community.jpg" alt=""></div>
    <div><img src="https://zephoria.com/wp-content/uploads/2014/08/online-community.jpg" alt=""></div>
    <div><img src="https://zephoria.com/wp-content/uploads/2014/08/online-community.jpg" alt=""></div>
    <div><img src="https://zephoria.com/wp-content/uploads/2014/08/online-community.jpg" alt=""></div>
    <div><img src="https://zephoria.com/wp-content/uploads/2014/08/online-community.jpg" alt=""></div>
</div>

<div class="owl-carousel owl-theme">
    <div> Your Content1 </div>
    <div> Your Content 2</div>
    <div> Your Content3 </div>
    <div> Your Content4 </div>
    <div> Your Content5 </div>
    <div> Your Content6 </div>
    <div> Your Content7 </div>
</div>
<hr>`;
div.setAttribute('id', 'app');

import 'babel-polyfill';

window.addEventListener('load', function () {


});