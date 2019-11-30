window.onload = function() {
  ['goodpoem', 'badpoem', 'normalpoem'].forEach(function(name) {
    document.getElementById(name).onclick = function() {
      const audio = new Audio();
      audio.src = `audio/${name}.mp3`;
      audio.play();
    };
  });
}
