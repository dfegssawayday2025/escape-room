$("#submit31").click(function () {
    var answer1 = document.getElementById("answer1").value.trim().toLowerCase();
    var result = "3.1"
    var result2 = "Bananas".toLowerCase();
  
    if (answer1 === result2 || answer1 === result) {
      window.location.href = "fourth.html";
    } else if (answer1 === "") {
      M.toast({ html: 'Answer cannot be empty' });
    } else {
      M.toast({ html: 'Wrong answer, keep trying!' });
    }
  })

$("#submit32").click(function () {
    var answer2 = document.getElementById("answer2").value.trim().toLowerCase();
    var result = "3.2"
    var result2 = "Bananas".toLowerCase();
  
    if (answer2 === result2 || answer2 === result) {
        window.location.href = "fifth.html";
    }
    else if (answer2 === "") {
        M.toast({ html: 'Answer cannot be empty' });
    }
    else {
        M.toast({ html: 'Wrong answer, keep trying!' });
    }
});

$("#submit33").click(function () {
    var answer3 = document.getElementById("answer3").value.trim().toLowerCase();
    var result = "3.3"
    var result2 = "Bananas".toLowerCase();
  
    if (answer3 === result2 || answer3 === result) {
        window.location.href = "sixth.html";
    }
    else if (answer3 === "") {
        M.toast({ html: 'Answer cannot be empty' });
    }
    else {
        M.toast({ html: 'Wrong answer, keep trying!' });
    }
});

$("#submit3all").click(function () {
    var answer4 = document.getElementById("answer4").value.trim().toLowerCase();
    var result = answer4.includes("3");
    if (result == true) {
        window.location.href = "seventh.html";
    }
    else if (answer4 === "") {
        M.toast({ html: 'Answer cannot be empty' });
    }
    else {
        M.toast({ html: 'Wrong answer, keep trying!' });
    }
});

$(document).keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        $("#submit31").trigger('click');
    }
});

$(document).keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        $("#submit32").trigger('click');
    }
});

$(document).keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        $("#submit33").trigger('click');
    }
});

$(document).keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        $("#submit3all").trigger('click');
    }
});