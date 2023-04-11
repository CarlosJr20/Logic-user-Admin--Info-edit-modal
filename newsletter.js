$(function () {
	$(".section_25 .readmore, .section_50 .readmore").each(function () {
		$('<a href="" class="more">Show More <span><i class="fas fa-sort-down"></i></span></a>').insertAfter(this);
		$(this).addClass("a_gradient");
		$(this).siblings(".more").click(function (e) {
				e.preventDefault();
				var readmore = $(this).siblings(".readmore");

				if (readmore.hasClass("a_gradient")) {
					readmore.toggleClass("a_gradient");
					$(this).html('Show Less <span><i class="fas fa-sort-up"></i></span>');
				} else {
					$("html, body").animate(
						{
							scrollTop: readmore.offset().top - 60,
						},
						"slow"
					);
					readmore.toggleClass("a_gradient");
					$(this).html('Show More <span><i class="fas fa-sort-down"></i></span>');
				}
			});
	});

	$(".section_75 article .a_title").click(function () {
		$(this).siblings("div.a_content").slideToggle(700);
		$("h1 span", this).toggleText("+", "-");
	});


	$("#news_index li a").click(function () {
		var id = document.getElementById($(this).attr("href").split("#")[1]);
		$(id).children("div.a_content").slideDown(700);
		$("h1 span", id).html("-");
	});
		
});

jQuery.fn.toggleText = function (value1, value2) {
	return this.each(function () {
		var $this = $(this),
			text = $this.text();

		if (text.indexOf(value1) > -1) $this.text(text.replace(value1, value2));
		else $this.text(text.replace(value2, value1));
	});
};