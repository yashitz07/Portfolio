document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Fetch the form data
    const formData = new FormData(event.target);

    // Make a POST request to the server
    // const response = await fetch('http://localhost:3000/submit', {
    //     method: 'POST',
    //     body: formData,
    // });

    // Parse the JSON response
    const result = await response.json();

    // Display an alert with the server response
    alert(result.message);
    document.getElementById('myForm').reset();
});
document.addEventListener("DOMContentLoaded", function () {
    var mediaButton = document.querySelector(".main_media_button");
    var mainList = document.querySelector(".main_list");

    mediaButton.addEventListener("click", function () {
        mainList.classList.toggle("show_list");
    });
});