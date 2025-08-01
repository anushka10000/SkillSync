document.getElementById('skillForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const teach = document.getElementById('teach').value.trim();
  const learn = document.getElementById('learn').value.trim();
  const resultDiv = document.getElementById('result');

  if (teach && learn) {
    resultDiv.textContent = `Awesome! We’ll find someone who wants to learn "${teach}" and teach you "${learn}". 🚀`;
    this.reset();
  } else {
    resultDiv.textContent = 'Please fill out both fields.';
  }
});
