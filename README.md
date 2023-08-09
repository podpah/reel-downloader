# Reel Downloader
Reel Downloader is a simple bookmarklet that allows you to easily save your instagram reels. I built it because I tried a few extensions and they didn't work so here we are.

You can get it by dragging and dropping this on your bookmarks: <br>
<a href="javascript:(function(){ var scriptTags = document.querySelectorAll('script[type=&quot;application/ld+json&quot;]'); if (scriptTags.length > 0) { var jsonData = JSON.parse(scriptTags[0].textContent); if (jsonData[0].video && jsonData[0].video[0].contentUrl) { var contentUrl = jsonData[0].video[0].contentUrl; var openVideo = document.createElement('a'); openVideo.href = contentUrl; openVideo.download = ''; document.body.appendChild(openVideo); openVideo.click(); } else { console.log('Video URL not found.'); } } else if (window.location.href.substring(8, 16) == 'scontent') { var link = document.createElement('a'); link.href = window.location.href; link.download = ''; document.body.appendChild(link); link.click(); history.back(); } else { console.log('Script tag not found.'); } })();" style="color:crimson;">Reel D</a><br>
You can also copy and paste [bookmarklet](bookmarklet.js) into a bookmark's URL if this doesn't work for you

# Usage
You just click the bookmark once to run it. It'll turn the tab into the video source, then when you click the bookmark again, it'll generate the download prompt for your browser and bring you back to the reel tab. <br>
(I couldn't figure out how to have it open a new tab with the video, download it then close the tab with just one bookmarklet so that's how it is. If I manage to figure it out, I'll update it. Otherwise if you have any ideas for making this possible, please do let me know or create a PR)
