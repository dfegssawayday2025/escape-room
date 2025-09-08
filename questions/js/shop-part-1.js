const form = document.getElementById('myForm');
const field1 = document.getElementById('field1')
const checkBtn1 = document.getElementById('checkBtn1');
const field2 = document.getElementById('field2')
const checkBtn2 = document.getElementById('checkBtn2');
const submitBtn = document.getElementById('submitBtn');
const errorMessage = document.getElementById('errorMessage');
const errorMessage2 = document.getElementById('errorMessage2');

let field1Valid = false;
let field2Valid = false;

// Event listeners for check buttons
checkBtn1.addEventListener('click', () => validateField(field1));
checkBtn2.addEventListener('click', () => validateField2(field2));

// Function to validate individual fields
function validateField(field) {
  errorMessage.textContent = ''; // Clear any previous error message

  const expectedValue = "A";

  // Convert both user input and expected value to lowercase and trim whitespace
  const lowerCaseInput = field.value.toLowerCase().trim();

  const lowerCaseExpectedValue = expectedValue.toLowerCase().trim();

  if (lowerCaseInput !== lowerCaseExpectedValue) {
    errorMessage.textContent = `Incorrect value for field ${field.id.slice(5)}.`;
    return; // Exit the function if validation fails
  }

  // Update validation status for the specific field
  if (field === field1) {
    field1Valid = true;
    document.getElementById('tick1').classList.remove('hidden'); // Show tick icon for field1
  }
  // Check if all fields are valid and enable div 
  const hiddenButtonDiv1 = document.getElementById('hiddenButtonDiv1'); 
  hiddenButtonDiv1.style.display = field1Valid ? 'block' : 'none';

}

// Function to validate individual fields
function validateField2(field) {
  errorMessage2.textContent = ''; // Clear any previous error message

  const expectedValue = "#12436D";

  // Convert both user input and expected value to lowercase and trim whitespace
  const lowerCaseInput = field.value.toLowerCase().trim();

  const lowerCaseExpectedValue = expectedValue.toLowerCase().trim();
	
  if (lowerCaseInput !== lowerCaseExpectedValue) {
    errorMessage2.textContent = `Incorrect value for field ${field.id.slice(5)}.`;
    return; // Exit the function if validation fails
  }
  // Update validation status for the specific field
  if (field === field2) {
    field2Valid = true;
    document.getElementById('tick2').classList.remove('hidden'); // Show tick icon for field2
  }
  // Check if all fields are valid and enable div 
  const hiddenButtonDiv2 = document.getElementById('hiddenButtonDiv2'); 
  hiddenButtonDiv2.style.display = field2Valid ? 'block' : 'none';

}