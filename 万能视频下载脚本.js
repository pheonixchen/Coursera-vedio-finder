//找视频
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
//倍速视频
var videoElement = document.querySelector('video');
if (videoElement) {
  videoElement.playbackRate = 2.0;
}
//找视频但是不下载
var videoElement = document.querySelector('video');
if (videoElement) {
  var videoURL = videoElement.src;
  var downloadLink = document.createElement('a');
  downloadLink.href = videoURL;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
