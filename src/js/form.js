
const validateBtn = document.querySelector('.btn');
const name = document.querySelector('.name');
const mobile = document.querySelector('.mobile');
const email = document.querySelector('.email');
const area = document.querySelector('.area');

validateBtn.addEventListener('click', function (e) {
   e.preventDefault();
   console.log('clicked on validate');

   console.log(`name: ${name.value}`);
   console.log(`mobile: ${mobile.value}`);
   console.log(`email: ${email.value}`);
   console.log(`area: ${area.value}`);
   validateForm(name.value, mobile.value, email.value, area.value)
});

function clearForm() {
   name.value = "";
   mobile.value = "";
   email.value = "";
   area.value = "";
}

function validateForm(nameVal, mobileVal, emailVal, areaVal) {
   let namePattern = /^[a-z A-Z]{1,20}$/;
   let mobilePattern = /^\+\d{12}$/;
   let emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   let areaPattern = /^(?!\s*$).+/;

   let isNameValid = namePattern.test(nameVal);
   let isMobileValid = mobilePattern.test(mobileVal);
   let isEmailValid = emailPattern.test(emailVal);
   let isAreaValid = areaPattern.test(areaVal);

   if (isNameValid) {
      name.classList.remove('invalid')
   } else {
      name.classList.add('invalid')
   }

   if (isMobileValid) {
      mobile.classList.remove('invalid')
   } else {
      mobile.classList.add('invalid')
   }

   if (isEmailValid) {
      email.classList.remove('invalid')
   } else {
      email.classList.add('invalid')
   }

   if (isAreaValid) {
      area.classList.remove('invalid')
   } else {
      area.classList.add('invalid')
   }
   if (isNameValid && isMobileValid && isEmailValid && isAreaValid) {
      document.querySelector('.contact__valide').style.visibility = "visible";
      clearForm();
   }

}
