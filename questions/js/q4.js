const form = document.getElementById('myForm');
const inputField = document.getElementById('myInput');
const errorMessage = document.getElementById('errorMessage');


form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
  
    const userInput = inputField.value.trim(); // Get user input and trim whitespace

    if (userInput === 'frozen') { // Check if input is exactly "bananas"
      window.location.href = "fifth.html"; // Redirect to next page
    } else {
      errorMessage.textContent = 'Incorrect input. Please enter correct password - "bananas".';
      errorMessage.style.display = 'block'; // Show error message
    }
  });




$("#submitStudBtn").click(function () {
    var answer = document.getElementById("answer").value.toString().toLowerCase();
    var result = answer.includes("4") || answer.includes("4.4");
    if (result == true) {
        window.location.href = "fifth.html";
    }
    else if (answer === "") {
        M.toast({ html: 'Answer cannot be empty' });
    }
    else {
        M.toast({ html: 'Wrong answer, keep trying!' });
    }
});

$(document).keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        $("#submitStudBtn").trigger('click');
    }
});