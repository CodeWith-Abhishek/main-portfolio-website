 const greetings = [
    "नमस्कार !",
    "Hello !",
    "Hola !",
    "ନମସ୍କାର !",
  ];

  const greetingElement = document.getElementById("greeting");
  const typingSpeed = 150;
  const pauseTime = 1000;
  let greetingIndex = 0;
  let charIndex = 0;

  function typeGreeting() {
    const currentGreeting = greetings[greetingIndex];
    if (charIndex < currentGreeting.length) {
      greetingElement.textContent += currentGreeting.charAt(charIndex);
      charIndex++;
      setTimeout(typeGreeting, typingSpeed);
    } else {
      setTimeout(deleteGreeting, pauseTime);
    }
  }

  function deleteGreeting() {
    if (charIndex > 0) {
      greetingElement.textContent = greetingElement.textContent.slice(0, -1);
      charIndex--;
      setTimeout(deleteGreeting, typingSpeed / 2);
    } else {
      greetingIndex = (greetingIndex + 1) % greetings.length;
      setTimeout(typeGreeting, typingSpeed);
    }
  }

  typeGreeting();

window.onload = function() {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);  // delay 100ms
};


//form-submission-popup
const form = document.getElementById('contactForm');
  const thankYouPopup = document.getElementById('thankYouPopup');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {'Accept': 'application/json'}
  }).then(response => {
    if (response.ok) {
      thankYouPopup.style.display = 'block';
      form.reset();

      setTimeout(() => {
        thankYouPopup.style.display = 'none';
      }, 2000); // hides after 4 seconds
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  }).catch(() => {
    alert("Oops! Something went wrong. Please try again.");
  });
});
