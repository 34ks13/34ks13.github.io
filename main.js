function scrollToAbout() {
	 window.scrollTo({
		top: 1000,
		behavior: "smooth"
	});
};

function scrollToService() {
	 window.scrollTo({
		top: 2000,
		behavior: "smooth"
	});
};

function scrollToLocation() {
	 window.scrollTo({
		top: 3500,
		behavior: "smooth"
	});
};

function scrollToReview() {
	 window.scrollTo({
		top: 4500,
		behavior: "smooth"
	});
};

function scrollToSpeak() {
	 window.scrollTo({
		top: 5800,
		behavior: "smooth"
	});
};

function scrollToRequest() {
	 window.scrollTo({
		top: 10000,
		behavior: "smooth"
	});
};

$(document).ready(function() {
	$(".accordion_header").click(function(){
		$(this).next(".accordion_content").slideToggle(200);
	});
});

$(document).ready(function(){
	$(".next").click(function(){
		var currentImage = $(".reviews_item.curry");
		var currentImageIndex = $(".reviews_item.curry").index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $(".reviews_item").eq(nextImageIndex);
		currentImage.fadeOut(0);
		currentImage.removeClass("curry");
		
		if (nextImageIndex == ($(".reviews_item:last").index()+1)){
			$(".reviews_item").eq(0).fadeIn(300);
			$(".reviews_item").eq(0).addClass("curry");
		} else {
			nextImage.fadeIn(300);
			nextImage.addClass("curry");
		}
	});
	
	$(".prev").click(function(){
		var currentImage = $(".reviews_item.curry");
		var currentImageIndex = $(".reviews_item.curry").index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $(".reviews_item").eq(prevImageIndex);
		currentImage.fadeOut(0);
		currentImage.removeClass("curry");
		prevImage.fadeIn(300);
		prevImage.addClass("curry");
		
	});
});

$(document).ready(function(){
	$(".forv").click(function(){
		var currentImage = $(".speak_item.first");
		var currentImageIndex = $(".speak_item.first").index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $(".speak_item").eq(nextImageIndex);
		currentImage.fadeOut(0);
		currentImage.removeClass("first");
		
		if (nextImageIndex == ($(".speak_item:last").index()+1)){
			$(".speak_item").eq(0).fadeIn(300);
			$(".speak_item").eq(0).addClass("first");
		} else {
			nextImage.fadeIn(300);
			nextImage.addClass("first");
		}
	});
	
	$(".back").click(function(){
		var currentImage = $(".speak_item.first");
		var currentImageIndex = $(".speak_item.first").index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $(".speak_item").eq(prevImageIndex);
		currentImage.fadeOut(0);
		currentImage.removeClass("first");
		prevImage.fadeIn(300);
		prevImage.addClass("first");
		
	});
});

$(document).ready(function(){
	$("send form").click(function(){
		var form = $(this).closest("form");
		
		if (form.valid()) {
			var actUrl = form.attr("action");
			
			$.ajax({
				url: acturl,
				type: "post",
				dataype: "html",
				data: form.serialize(),
				success: function(data) {
				form.find(".status").html("Заявка отправлена");
				},
				error: function() {
					form.find(".status").html("Ошибка");
				}
		});
	}
});