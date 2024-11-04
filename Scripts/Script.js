/* Eamonn Browne  Student ID 23309709
     Web Design and Client-Side Scripting
     Individual CA 
     Lecturer Lias Murphy
*/


document.getElementById('contactForm').addEventListener('submit', function(event) {
  // Prevent the form from submitting immediately
  event.preventDefault();
  /* read the Email value from form with id contactForm */
  let fEmail = document.forms["contactForm"]["Email"].value;
  /* use a regular expression to validate email addess is in the form someone@somewhere.something */
  let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!re.test(fEmail)){
    alert("Email is in an invalid format");
  }
  else {
    /* Display a message to say the form has been submitted */
    alert ("Form Successfully submitted");
  }
});
