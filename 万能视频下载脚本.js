var videoElement = document.querySelector('video');
if (videoElement) {
  var videoURL = videoElement.src;
  var downloadLink = document.createElement('a');
  downloadLink.href = videoURL;
  downloadLink.download = 'video.mp4'; 
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}