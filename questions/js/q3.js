function generateSuccessMessageData() {
    return `
    <div name="questionBox">
    <div class="row mt-4">
      <p> That was it! <b>Does the data make sense?</b> </p>
      <p> You better double check </p>
      <p> Open envelope X. </p>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="answer4" name="answer4" type="text" class="validate">
        <label for="answer4">What was the outlier?</label>
      </div>
      <div class="center">
        <button name="submit4" class="btn btn-puzzle z-depth-0 waves-effect mb-n4"
                id="submit4" value="Submit">Submit</button>
      </div>
    </div>
    <div class="row">
      <div class="col s12 center">
        <span>CURRENT ANSWER = 4</span>
      </div>
    </div>
  </div>`;
}

function generateSuccessMessageProcess() {
    return `
    <div name="questionBox">
    <div class="row mt-4">
        <p> That was it! <b>Does the process make sense?</b>
        <p> You better double check </p>
        <p> Open envelope X. </p>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="answer" name="answer" type="text" class="validate">
        <label for="answer">Need to work out how we do this bit</label>
      </div>
      <div class="center">
        <button name="submitStudBtn" class="btn btn-puzzle z-depth-0 waves-effect mb-n4"
                id="submitStudBtn" value="Submit">Submit</button>
      </div>
    </div>
    <div class="row">
      <div class="col s12 center">
        <span>CURRENT ANSWER = 5</span>
      </div>
    </div>
  </div>`;
}

function generateSuccessMessageStory() {
    return `
    <div name="questionBox">
    <div class="row mt-4">
        <p> That was it! <b>Does the story make sense?</b>
        <p> You better double check </p>
        <p> Open envelope X. </p>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="answer" name="answer" type="text" class="validate">
        <label for="answer">Which graph can't be explained?</label>
      </div>
      <div class="center">
        <button name="submitStudBtn" class="btn btn-puzzle z-depth-0 waves-effect mb-n4"
                id="submitStudBtn" value="Submit">Submit</button>
      </div>
    </div>
    <div class="row">
      <div class="col s12 center">
        <span>CURRENT ANSWER = 6</span>
      </div>
    </div>
  </div>`;
}

function SuccesstoQ() {
    return `
    <div class="row mt-4">
      <p> YAY </p>
    </div>`;
}


$("#submit31").click(function () {
    var answer1 = document.getElementById("answer1").value.trim().toLowerCase();
    var result = "Data".toLowerCase(), result2 = "Bananas".toLowerCase();

    var answerContainer = document.getElementById("answer-result-1");
    answerContainer.innerHTML = ""; // Clear previous content
  
    if (answer1 === result2 || answer1 === result) {
       
      answerContainer.innerHTML = generateSuccessMessageData()
      answerContainer.classList.remove("hidden"); // Show the container

    } else if (answer1 === "") {
      M.toast({ html: 'Answer cannot be empty' });
    } else {
      M.toast({ html: 'Wrong answer, keep trying!' });
    }
  })

$("#submit32").click(function () {
    var answer2 = document.getElementById("answer2").value.trim().toLowerCase();
    var result = "Process".toLowerCase(), result2 = "Bananas".toLowerCase();

    var answerContainer = document.getElementById("answer-result-2");
    answerContainer.innerHTML = ""; // Clear previous content
  
    if (answer2 === result2 || answer2 === result) {
       
      answerContainer.innerHTML = generateSuccessMessageProcess()
      answerContainer.classList.remove("hidden"); // Show the container

    } else if (answer2 === "") {
      M.toast({ html: 'Answer cannot be empty' });
    } else {
      M.toast({ html: 'Wrong answer, keep trying!' });
    }
});

$("#submit33").click(function () {
    var answer3 = document.getElementById("answer3").value.trim().toLowerCase();
    var result = "Story".toLowerCase(), result2 = "Bananas".toLowerCase();

    var answerContainer = document.getElementById("answer-result-3");
    answerContainer.innerHTML = ""; // Clear previous content
  
    if (answer3 === result2 || answer3 === result) {
       
      answerContainer.innerHTML = generateSuccessMessageStory()
      answerContainer.classList.remove("hidden"); // Show the container

    } else if (answer3 === "") {
      M.toast({ html: 'Answer cannot be empty' });
    } else {
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



$("#submit4").click(function () {
    var answer = document.getElementById("answer4").value.toString().toLowerCase();
    var result = answer.includes("4") || answer.includes("4.4");
    
    var answerContainer = document.getElementById("answer-result-4");
    answerContainer.innerHTML = ""; // Clear previous content
    
    if (result == true) {
        answerContainer.innerHTML = "Success" // SuccesstoQ()
        answerContainer.classList.remove("hidden"); // Show the container
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
        $("#submit4").trigger('click');
    }
});


$("#submit34").click(function () {
    var answer4 = document.getElementById("answer4").value.trim().toLowerCase();
    var result = "hello".toLowerCase(); // convert to lowercase
    var result2 = "bananas".toLowerCase(); // convert to lowercase

    var answerContainer = document.getElementById("answer-result-4");
    answerContainer.innerHTML = ""; // Clear previous content
 
    if (answer4.toLowerCase() === result || answer4.toLowerCase() === result2) {

        answerContainer.innerHTML = "Success" // SuccesstoQ()
        answerContainer.classList.remove("hidden"); // Show the container
      
    } else if (answer4 === "") {
      M.toast({ html: 'Answer cannot be empty' });
    } else {
      M.toast({ html: 'Wrong answer, keep trying!' });
    }
});



$(document).keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        $("#submit34").trigger('click');
    }
});


$("#submit3all").click(function () {
    
        window.location.href = "seventh.html";

});





$(document).keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        $("#submit3all").trigger('click');
    }
});