function toggleDark() {
  document.body.classList.toggle("dark");
}
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
    // Extra JS for video language switch 
  const video = document.querySelector("video");
  
  window.addEventListener("hashchange", () => {
    if (location.hash === "#video") {
      video.play();
    } else {
      video.pause();
    }
  });
  
  function switchLang() {
    const hindi = document.getElementById('content-hindi');
    const english = document.getElementById('content-english');
    const btn = document.getElementById('lang-toggle');
    
    if (hindi.style.display === 'none') {
      hindi.style.display = 'block';
      english.style.display = 'none';
      btn.innerText = 'Switch to English';
    } else {
      hindi.style.display = 'none';
      english.style.display = 'block';
      btn.innerText = 'हिंदी में देखें';
    }
  }
  
    window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('progress-bar').style.width = scrollPercent + '%';
});
