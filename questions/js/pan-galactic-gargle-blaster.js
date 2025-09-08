const form = document.getElementById('myForm');
const field1 = document.getElementById('field1')
const checkBtn1 = document.getElementById('checkBtn1');
const submitBtn = document.getElementById('submitBtn');
const errorMessage = document.getElementById('errorMessage');

let field1Valid = false;

// Event listeners for check buttons
checkBtn1.addEventListener('click', () => validateField(field1));

// Function to validate individual fields
function validateField(field) {
  errorMessage.textContent = ''; // Clear any previous error message

  const expectedValue = "statistics";

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