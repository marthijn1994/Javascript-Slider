function Slider(element) {
	this.el = document.querySelector(element);
	this.init();
}

Slider.prototype = {
	init : function() {
		this.links = this.el.querySelectorAll("#slider-nav a");
		this.wrapper = this.el.querySelector("#slider-wrapper");
		this.navigate();
	},
	navigate : function() {
		for (var i = 0; i < this.links.length; ++i) {
			var link = this.links[i];
			this.slide(link);
		}
	},
	animate : function(slide) {
		var parent = slide.parentNode,
			caption = slide.querySelector(".caption"),
			captions = slide.querySelectorAll(".caption");

		for (var i = 0; i < captions.length; ++i) {
			var cap = captions[i];
			if (cap !== caption) {
				cap.classList.remove("visible");
			}
		}
		caption.classList.add("visible");
	},
	slide : function(element) {
		var self = this;
		element.addEventListener("click", function(e) {
			e.preventDefault();

			var a = this;
			self.setLink(a);

			var index = parseInt(a.getAttribute("data-slide"), 10) + 1;
			var currentSlide = self.el.querySelector(".slide:nth-child(" + index + ")");

			self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
			self.animate(currentSlide);
		}, false);
	},
	setLink : function(link) {
		var parent = link.parentNode;
		var a = parent.querySelectorAll("a");

		link.className = "current";

		for (var i = 0; i < a.length; ++i) {
			var cur = a[i];
			if (cur !== link) {
				cur.className = "";
			}
		}
	}
};

document.addEventListener("DOMContentLoaded", function() {
  	var slider = new Slider("#slider");
});