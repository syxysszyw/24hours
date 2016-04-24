$(function(){

    // var clickEvent = (document.ontouchstart!==null) ? 'click' : 'touchstart';
    // var transitionEvent = whichTransitionEvent();
    // var animationEvent = whichAnimationEvent();


    // function whichTransitionEvent(){
    //     var t,
    //         el = document.createElement("fakeelement");

    //     var transitions = {
    //         "transition"      : "transitionend",
    //         "OTransition"     : "oTransitionEnd",
    //         "MozTransition"   : "transitionend",
    //         "WebkitTransition": "webkitTransitionEnd"
    //     }

    //     for (t in transitions){
    //         if (el.style[t] !== undefined){
    //             return transitions[t];
    //         }
    //     }
    // }

    // function whichAnimationEvent(){
    //     var t,
    //         el = document.createElement("fakeelement");

    //     var animations = {
    //         "animation"      : "animationend",
    //         "OAnimation"     : "oAnimationEnd",
    //         "MozAnimation"   : "animationend",
    //         "WebkitAnimation": "webkitAnimationEnd"
    //     }

    //     for (t in animations){
    //         if (el.style[t] !== undefined){
    //             return animations[t];
    //         }
    //     }
    // }


    // 预加载动画
    // new preloader({
    //     files: preload,
    //     progress: function(err, response, percent) {
    //         $('.percent').text(percent + '%');
    //     },
    //     complete: function() {
    //         // 隐藏加载器
    //         $('.preloader').addClass('loaded');
    //         $('.preloader').on(animationEvent, function() {
    //             $('.preloader').remove();
    //             setTimeout(function() {
    //                 // $('.point .avatar').remove();
    //             }, 200);
    //         });

    //         // window.mySlider = new iSlider(sliderOpts);
    //         var swiper = new Swiper('.swiper-container', {
    //             pagination: '.swiper-pagination',
    //             paginationClickable: true
    //         });
    //         if (typeof localStorage !== undefined) {
    //             var musicDefault = localStorage.getItem('musicDefault');
    //             if(musicDefault === 'true') {
    //                 bgAudio.play();
    //             }
    //         } else {
    //             bgAudio.play();
    //         }
    //     }
    // });

    // // 背景音乐控制
    // var bgMusic = $('#bgMusic');
    // var bgMusicContr = $('#bgMusicContr');
    // var bgAudio = document.getElementById("bgMusic");
    // $(document).on(clickEvent, '#bgMusicContr', function(e) {
    //     var $this = $(this);
    //     if (!$this.hasClass('playing')) {
    //         document.getElementById("bgMusic").play();
    //         typeof localStorage !== undefined && localStorage.setItem('musicDefault', true);
    //     } else {
    //         document.getElementById("bgMusic").pause();
    //         typeof localStorage !== undefined && localStorage.setItem('musicDefault', false);
    //     }
    // });

    // // 播放事件
    // bgMusic.on('play', function() {
    //     bgMusicContr.addClass('playing');
    // });

    // // 暂停事件
    // bgMusic.on('pause', function() {
    //     bgMusicContr.removeClass('playing');
    // });

    // // 对不支持自动播放的设备使用一次性的 touchstart 事件触发
    // $(document).one('touchstart', function() {
    //     if (typeof localStorage !== undefined) {
    //         var musicDefault = localStorage.getItem('musicDefault');
    //         if(musicDefault === 'true') {
    //             bgAudio.play();
    //         }
    //     } else {
    //         bgAudio.play();
    //     }
    // });

});