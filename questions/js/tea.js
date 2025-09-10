const form = document.getElementById('myForm');
const field1 = document.getElementById('field1')
const checkBtn1 = document.getElementById('checkBtn1');
const submitBtn = document.getElementById('submitBtn');
const errorMessage = document.getElementById('errorMessage');

let field1Valid = false;

// Event listeners for check buttons
checkBtn1.addEventListener('click', () => validateField(field1));

// Function to validate individual fields

function areEqual(array1, array2) {
  if (array1.length === array2.length) {
    return array1.every(element => {
      if (array2.includes(element)) {
        return true;
      }

      return false;
    });
  }

  return false;
}

function validateField(field) {
  errorMessage.textContent = ''; // Clear any previous error message

  const expectedValue = "Pillar, methodology, trust, analysts, high, assurance, reproducible, audit ";
  
  // Convert both user input and expected value to lowercase and trim whitespace
  const lowerCaseInput = field.value.toLowerCase().trim();
  const lowerCaseInputSplit = lowerCaseInput.split(",");
  const lowerCaseExpectedValue = expectedValue.toLowerCase().trim();
  const lowerCaseExpectedValueSplit = lowerCaseExpectedValue.split(",");
  if (!areEqual(lowerCaseInputSplit,lowerCaseExpectedValueSplit)) {
    errorMessage.textContent = `Incorrect value for field ${field.id.slice(5)}.`;
    return; // Exit the function if validation fails
  }
  // Update validation status for the specific field
  if (areEqual(lowerCaseInputSplit,lowerCaseExpectedValueSplit)) {
    field1Valid = true;
    document.getElementById('tick1').classList.remove('hidden'); // Show tick icon for field1
  }
  // Check if all fields are valid and enable div 
  const hiddenButtonDiv1 = document.getElementById('hiddenButtonDiv1'); 
  hiddenButtonDiv1.style.display = field1Valid ? 'block' : 'none';

}
