<script>
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const homeButton = document.getElementById('home-button');
    const shareButton = document.getElementById('share-button');
    const proposalScreen = document.getElementById('proposal-screen');
    const acceptScreen = document.getElementById('accept-screen');
    const nameInput = document.getElementById('name-input');
    const messageInput = document.getElementById('message-input');

    let noClickCount = 0;

    noButton.addEventListener('click', () => {
      noClickCount++;
      noButton.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
    });

    yesButton.addEventListener('click', () => {
      proposalScreen.classList.add('hidden');
      acceptScreen.classList.remove('hidden');
    });

    homeButton.addEventListener('click', () => {
      proposalScreen.classList.remove('hidden');
      acceptScreen.classList.add('hidden');
    });

    shareButton.addEventListener('click', () => {
      html2canvas(document.querySelector(".container")).then(canvas => {
        const screenshot = canvas.toDataURL("image/png");
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent("Check out this proposal!")}&media=${encodeURIComponent(screenshot)}`;
        window.open(whatsappUrl, '_blank');
      });
    });
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>