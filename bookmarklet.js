javascript:(function() {
    var scriptTags = document.querySelectorAll('script[type="application/ld+json"]');
    if (scriptTags.length > 0) {
        var jsonData = JSON.parse(scriptTags[0].textContent);
        if (jsonData[0].video && jsonData[0].video[0].contentUrl) {
            var contentUrl = jsonData[0].video[0].contentUrl;
            var openVideo = document.createElement('a');
            openVideo.href = contentUrl;
            openVideo.download = '';
            document.body.appendChild(openVideo);
            openVideo.click();
        } else {
            console.log("Video URL not found.");
        }
    } else if (window.location.href.substring(8,16) == "scontent"){
        var link = document.createElement('a');
        link.href = window.location.href;
        link.download = '';
        document.body.appendChild(link);
        link.click();
        history.back();
    } 
    else {
        console.log("Script tag not found.");
    }
})();
