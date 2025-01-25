const form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = new URLSearchParams();
  formData.forEach((value, key) => {
    data.append(key, value);
  });

  fetch('', {
    method: 'POST',
    body: data, // Send the data as application/x-www-form-urlencoded
  })
    .then(response => response.text())
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
