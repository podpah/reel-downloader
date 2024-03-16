javascript: (function () {
	try {
		window.open(document.querySelector("video").src);
	} catch (error) {
		console.error("No video tag");
	}
})();
