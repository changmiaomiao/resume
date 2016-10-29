var mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    lazyLoading:true,
    nextButton:"swiper-button-next",
    onSlideChangeEnd: function (swiper) {
        var slides = swiper.slides;
        var curIndex = swiper.activeIndex;
        var trueSlideNum = slides.length - 2;
        var lastSlideNum = trueSlideNum + 1;
        [].forEach.call(slides, function (item, index) {
            item.id = "";
            if (index == curIndex) {
                switch (index) {
                    case 0:
                        item.id = "page" + trueSlideNum;
                        break;
                    case lastSlideNum:
                        item.id = "page1";
                        break;
                    default :
                        item.id = "page" + curIndex;
                }

            }
        })
    },
    /* onInit:function(swiper){
     var slides=swiper.slides;
     slides[0].id="page1"
     }*/
});
var play = document.querySelector("#play");
var music = document.querySelector(".music");
window.setTimeout(function () {
    play.play();
    play.addEventListener("canplay", function () {
        music.className = "music musicMove";
        music.style.opacity = 1;
    })
}, 1000);
music.addEventListener("click", function () {
    if (play.paused) {//停止
        play.play();
        music.className = "music musicMove";
    } else {//播放
        play.pause();
        music.className = "music";
    }
})