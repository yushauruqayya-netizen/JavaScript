// Select elements using the exact IDs from your index.html
const studentForm = document.getElementById('studentForm');
const studentNameInput = document.getElementById('studentName');
const schoolNameInput = document.getElementById('schoolName');
const courseInput = document.getElementById('course');

const formMessage = document.getElementById('formMessage');
const cardResult = document.getElementById('cardResult');

const cardStudentName = document.getElementById('cardStudentName');
const cardSchoolName = document.getElementById('cardSchoolName');
const cardCourse = document.getElementById('cardCourse');

// Listen for form submission
studentForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Stop page from refreshing

  // Get input values and remove extra spaces
  const nameValue = studentNameInput.value.trim();
  const schoolValue = schoolNameInput.value.trim();
  const courseValue = courseInput.value.trim();

  // 1. Validation: If any input is empty
  if (nameValue === '' || schoolValue === '' || courseValue === '') {
    formMessage.textContent = 'Please fill out all fields before generating your card.';
    formMessage.style.color = 'red';
    
    // Keep card hidden on invalid input
    cardResult.hidden = true;
    return;
  }

  // 2. Clear error message when input is valid
  formMessage.textContent = '';

  // 3. Update ID card with user input
  cardStudentName.textContent = nameValue;
  cardSchoolName.textContent = schoolValue;
  cardCourse.textContent = courseValue;

  // 4. Reveal the card
  cardResult.hidden = false;
});