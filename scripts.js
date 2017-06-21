

$(".js-features").waypoint(function(direction){
 	//  notice how file has waypoints
 	//and name of method is waypoint
 	/*
        argument diecton determines if user scrolls
        up or down. decsiion based on parameter, direction

 	*/
 	if(direction=="down"){
    // sticky nav appears
    $("nav").addClass("sticky");
 	}else{
 	  // user scrolls up remove class sticky
 	  $("nav").removeClass("sticky");

 	}
 });



 $(".mobile-nav").on("click",function(){

	var nav=$(".main-nav");
	// 200 mili seconds
	nav.slideToggle(200);

	// var icon=$(".mobile-nav ");
	// if(icon.hasClass(".fa-bars")){
	// 	icon.addClass(".fa-times");
	// 	icon.removeClass(".fa-bars");

	// }else{
	// 	icon.removeClass(".fa-times");
	// 	icon.addClass(".fa-bars");

	// }

});