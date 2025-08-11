
function openFullScreen() {
    const video = document.getElementById('projectVideo');
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
}
 // --- Basic download metadata (adjust if you change file path/name) ---
 function initDownloadMeta() {
    const link = document.getElementById('downloadLink');
    const fileName = link.getAttribute('download') || link.getAttribute('href').split('/').pop();
    document.getElementById('fileName').textContent = fileName;
    document.getElementById('fileType').textContent = 'application/x-rar-compressed';
  };