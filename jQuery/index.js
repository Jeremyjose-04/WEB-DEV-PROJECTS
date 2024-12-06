//$("h1").css("color","red");

//$("button");
//$("h1").addClass("big-title margin-50");

//$("h1").text("jeremy");
//$("button").text("too much ")
//$("button").html("<em>too much</em>");
//console.log($("img").attr("src"));
//$("a").attr("href","https://www.yahoo.com");
//$("h1").click(function(){
//    $("h1").css("color","purple");
//});
//$("button").click(function(){
//    $("h1").css("color","purple");
//});

//$("input").keydown(function(event){
//    console.log(event.key);
//})
//$("input").keydown(function(event){
//    $("h1").text(event.key);
//});
//$("h1").on("mouseover",function(){
//    $("h1").css("color","purple");
//});
//$("button").on("click",function(){
//    $("h1").hide();
//})
//$("h1").show();
//$("button").on("click",function(){
//    $("h1").toggle();
//});
//$("button").on("click",function(){
//    $("h1").fadeOut();
//});
//$("button").on("click",function(){
//    $("h1").fade();
//});
//$("button").on("click",function(){
//    $("h1").slideUp();
//});
//$("button").on("click",function(){
//    $("h1").slideToggle();
//});
//$("button").on("click",function(){
//    $("h1").animate({opacity:0.5});
//});
$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})