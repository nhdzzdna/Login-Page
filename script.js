document.addEventListener("DOMContentLoaded", () => {
  const fotoGrupList = document.querySelectorAll('.fotoGrup');

  fotoGrupList.forEach(fotoGrup => {
    const audioId = fotoGrup.dataset.audio;
    const audio = document.getElementById(audioId);

    fotoGrup.addEventListener('mouseenter', () => {
      audio.currentTime = 0;
      audio.play().catch(error => {
        console.error(`Audio ${audioId} gagal diputar:`, error);
      });
    });

    fotoGrup.addEventListener('mouseleave', () => {
      audio.pause();
      audio.currentTime = 0;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById('gemoy');
    const images = ['assets/wowo.png', 'assets/samsul.png'];
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        img.src = images[currentIndex];
    }, 800);
});

let icon = document.getElementById('icon');
let pw = document.getElementById('pw');

icon.onclick = function () {
    if (pw.type === "password") {
        pw.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        pw.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
};
