const header = document.querySelector("header");
const hamburgerBtn = document.querySelector(".hamburger");
const navbarItems = document.querySelector(".navbar__ul");

// Header transition when Scrolled
document.addEventListener("scroll", () => {
  if(window.innerWidth < 800) header.classList.remove("transparent-header");
  else{
    if(window.scrollY <= 0) header.classList.add("transparent-header");
    else header.classList.remove("transparent-header");;
  }
})

// Mobile Menu Toggle
function toggleMobileMenu(){
  navbarItems.classList.toggle("hidden"); 
  hamburgerBtn.classList.toggle("active");
}

const clickedWhenMenuIsActive = (click) => 
menuIsActive() && click.target!== hamburgerBtn;

const menuIsActive = () => 
hamburgerBtn.classList.contains("active") && 
!navbarItems.classList.contains("hidden");

document.addEventListener("click", (click) => {
	if(click.target === hamburgerBtn || clickedWhenMenuIsActive(click)) toggleMobileMenu();
});

// About Us Section Toggle
const aboutUsSection = document.querySelector("#about-us");
const aboutUsOpenBtns = Array.from(document.querySelectorAll(".about-us-open-btn"));
const aboutUsCloseBtns = Array.from(document.querySelectorAll(".about-us-close-btn"));

aboutUsOpenBtns.forEach(button => { 
  button.onclick = () => aboutUsSection.classList.toggle("hidden", false);
});

aboutUsCloseBtns.forEach(button => 
	button.onclick = () => {
    aboutUsSection.classList.toggle("hidden", true);
  }
);

// Menu Selector
const categoryFilterBtn = document.querySelector("#menu__filter-btn");

categoryFilterBtn.onclick = click => {
  click.preventDefault();

  const menuSelector = document.querySelector("#categories");
  const selectedCategory = menuSelector.value.toLowerCase();
  const allHTMLCategories = document.querySelectorAll(".food-category");

  allHTMLCategories.forEach(category => {
    category.classList.toggle("hidden", true);

    if (category.id === selectedCategory) {
      setTimeout(()=> category.classList.toggle("hidden", false), 500);
    };
  })
}


// Sticky Whatsapp Btn for Menu Section
const menuSection = document.querySelector("#menu");
const menuWhatsappBtn = document.querySelector("#menu .whatsapp-btn")

document.addEventListener("scroll", () => {
  const headerHeightOffset = document.querySelector("header").scrollHeight;

  if((window.scrollY + headerHeightOffset) >= menuSection.offsetTop || 
  menuSection.scrollHeight <= window.innerHeight) menuWhatsappBtn.classList.toggle("show", true);
  else menuWhatsappBtn.classList.toggle("show", false);
});


// Form Validation
const form = document.querySelector("#form");

form.onsubmit = submit => {
  submit.preventDefault();

  const firstname = document.querySelector("[name='firstname']").value;
  const surname = document.querySelector("[name='surname']").value;
  const email = document.querySelector("[name='email']").value;
  const favouriteFood = document.querySelector("[name='favourite_food']").value;
  const tycCheckbox = document.querySelector("[name='tyc']").value;
  const emailMarketing = document.querySelector("[name='email_marketing']").value;

  // Fav Food y Marketing Email no son relevantes
  let firstNameOK = false; 
  let surnameOK = false;
  let emailOK = false;
  let errorMsgs = "Error:\n";

  // firstname
  if (firstname.length >= 5) firstNameOK = true;
  else errorMsgs += "- El nombre elegido debe tener al menos 5 caracteres.\n";

  // surname
  if (surname.length > 0) surnameOK = true;
  else errorMsgs += "- El campo Apellido no puede estar vacío.\n";

  // email (Se valida aunque los atributos HTML hagan algunas validaciones)
  if (email.length > 0){
    let hasAtSymbol = false;  // ¿tiene @ ?
    let hasDotSymbol = false; // ¿tiene . ?
    
    for(char of email) {
      if (char === "@") {
        hasAtSymbol = true;
        // chequear que luego del @ haya al menos un . (punto)
        const atSymbolIndex = email.indexOf("@");
        const email_domain = email.substring(atSymbolIndex + 1);
        
        for (char of email_domain) {
          if (char === ".") hasDotSymbol = true;
        }
      }
    }
    if (hasAtSymbol && hasDotSymbol) emailOK = true;
    else errorMsgs += "- Por favor ingresa un email válido (debe tener @ y al menos un punto despues del @)\n";

  } else errorMsgs += "- El campo Email no puede estar vacío.\n";

  const formIsValid = firstNameOK && surnameOK && emailOK;
  
  if(formIsValid) {
    console.log("Validating...");

    // Submit after 2 seconds and display coupon
    setTimeout(function() {
      const newUser = {
        "nombre": firstname,
        "apellido": surname,
        "email": email,
        "favouriteFood": favouriteFood,
        "tycCheckbox": tycCheckbox,
        "emailMarketingAllowed": emailMarketing
      }
      sendUserData(newUser); // se supone que acá enviamos al servidor
    },2000)
    
    // Mostrar cupon de descuento
    setTimeout(function() {
      const submitBtnContainer = document.querySelector(".form__submit");
      const couponTextContainer = document.querySelector(".form__coupon");

      submitBtnContainer.classList.toggle("hide", true);
      setTimeout(() => {
        submitBtnContainer.classList.toggle("hidden", true);
      }, 500);

      // El cupon se muestra en bloque, pero con transición suave
      couponTextContainer.classList.toggle("show", true);
      setTimeout(function() {
        couponTextContainer.classList.toggle("hidden", false); 
      }, 500);
    },3000)
  }else setTimeout(() => {
    alert(errorMsgs);
    console.log(errorMsgs);
  }, 500);
}


function sendUserData(newUserJSON) {
  console.log("Los datos del usuario se han enviado al servidor!");
  console.table(newUserJSON);
}
























