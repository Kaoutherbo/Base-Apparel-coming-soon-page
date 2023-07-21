
  const btn = document.querySelector('.arrow');
  const error_msg = document.querySelector(".error");
  const img_error = document.querySelector('.img-error');
  const Inputemail = document.getElementById('email');
  btn.addEventListener('click', validateEmail);

  function validateEmail(e) {
    e.preventDefault();
    let mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!Inputemail.value.match(mailformat)) {
      error_msg.style.display = 'block';
      img_error.style.display = 'block';
      Inputemail.style.borderColor = 'var(--Soft-Red)';
      Inputemail.style.borderWidth = '2px'; 
    } else {
      error_msg.style.display = 'none';
      img_error.style.display = 'none';
      Inputemail.style.borderColor = 'var(--Desaturated-Red)';
      Inputemail.value = ''; // Clear the input field
    }
  }

  // Handle the placeholder style dynamically
  Inputemail.addEventListener('focus', function () {
    Inputemail.setAttribute('placeholder', 'Email Address'); 
    Inputemail.style.color = 'var(--Dark-Grayish-Red)';
    Inputemail.style.fontFamily = 'var(--Font-Family)';
    Inputemail.style.fontSize = 'var(--Font-size)';
    Inputemail.style.fontWeight = 'var(--Font-Weight-medium)';
  });

  Inputemail.addEventListener('blur', function () {
    Inputemail.setAttribute('placeholder', 'Email Address'); 
    Inputemail.style.color = 'var(--Dark-Grayish-Red)';
    Inputemail.style.fontFamily = 'var(--Font-Family)';
    Inputemail.style.fontSize = 'var(--Font-size)';
    Inputemail.style.fontWeight = 'var(--Font-Weight-normal)';
  });

