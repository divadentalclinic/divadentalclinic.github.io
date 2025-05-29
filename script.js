
const form = document.getElementById('appointment-form');
const responseMessage = document.getElementById('response-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: 'POST',
    body: formData
  });
  const text = await response.text();
  responseMessage.textContent = text;
});
