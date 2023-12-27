$(function(){
    $('nav li').on('click',function(){
        var href = $(this).find('a').attr("href");
        var offSetTop = $(href).offset().top;
        $('html,body').animate({'scrollTop':offSetTop});
    });
});