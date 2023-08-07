javascript:(function() {
    var scriptTags = document.querySelectorAll('script[type="application/ld+json"]');
    if (scriptTags.length > 0) {
        var jsonData = JSON.parse(scriptTags[0].textContent);
        if (jsonData[0].video && jsonData[0].video[0].contentUrl) {
            var contentUrl = jsonData[0].video[0].contentUrl;
            window.open(contentUrl, '_blank');
        } else {
            console.log("Video URL not found.");
        }
    } else {
        console.log("Script tag not found.");
    }
})();
