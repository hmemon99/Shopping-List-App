$(document).ready(function(){
		$(".typehere").keyup(function (event) {
			console.log("which: ", event.which)
			if (event.which == 13) {
				displayItem();
			}
		})
		$(".listed-items").on('click',".remove-button",function(){
			$(this).closest("li").remove();
		})
		$(".listed-items").on('click',".completed-button",function(){
			$(this).closest("li").css("color", "black");
		})
	function displayItem() {
		var item = $(".typehere").val();
		var work = '<li><p>'+item+'</p><button class="completed-button">Completed</button><button class="remove-button">Remove</button></li>';
		$(".listed-items").prepend(work);
		$(".typehere").val('');
	}
});