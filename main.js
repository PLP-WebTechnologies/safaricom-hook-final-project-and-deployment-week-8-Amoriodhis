document.querySelector('#contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
  
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
  
    alert(`Thank you, ${name}! Your message has been received.`);
  });