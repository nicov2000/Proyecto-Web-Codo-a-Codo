const hamburgerBtn = document.querySelector(".hamburger");
const navbarItems = document.querySelector(".navbar__ul");

// Mobile Menu Toggle
document.addEventListener("click", (click) => {
	if(click.target === hamburgerBtn || clickedOutsideMenu(click)) {
			toggleMobileMenu();
	}
});

const clickedOutsideMenu = (click) => 
menuIsActive() && click.target!== hamburgerBtn;

const menuIsActive = () => 
hamburgerBtn.classList.contains("active") && 
!navbarItems.classList.contains("hidden");

function toggleMobileMenu(){
	navbarItems.classList.toggle("hidden"); 
	hamburgerBtn.classList.toggle("active");
}

// About Us Section Toggle
const aboutUsSection = document.querySelector("#about-us");

const aboutUsOpenBtns = Array.from(document.querySelectorAll(".about-us-open-btn"));
const aboutUsCloseBtns = Array.from(document.querySelectorAll(".about-us-close-btn"));

aboutUsOpenBtns.forEach(button => 
  button.onclick = () => {
    aboutUsSection.classList.toggle("hidden", false);
  }
);

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

// Form Validation
const form = document.querySelector("#form");

form.onsubmit = function(event) {
  event.preventDefault();
  validateForm();
};

function validateForm() {
  const firstname = document.querySelector("[name='firstname']");
  const surname = document.querySelector("[name='surname']");
  const email = document.querySelector("[name='email']");
  const favouriteFood = document.querySelector("[name='favourite_food']");
  const tycCheckbox = document.querySelector("[name='tyc']");
  const emailMarketing = document.querySelector("[name='email_marketing']");

  // if(true) { // testeando validaciones
    console.log("%cpreventDefault() working! Now you can validate all fields and decide to submit or not.", "background-color: #292; padding: 10px; border-radius: 10px;");
    console.log(`${firstname.name}: ${firstname.value}`);
    console.log(`${surname.name}: ${surname.value}`);
    console.log(`${email.name}: ${email.value}`);
    console.log(`${favouriteFood.name}: ${favouriteFood.value}`);
    console.log(`${tycCheckbox.name}: ${tycCheckbox.value}`);
    console.log(`${emailMarketing.name}: ${emailMarketing.value}`);
  //   return false;

  setTimeout(function() {
    
    // if everything is ok...
    form.submit()

    // else abort submit and tell the client to check the form.
    // code
    // code
  },8000)

  // Formulario funcionando correctamente. Al enviar los datos se previene la conducta normal (enviar el formulario) y primero pasa por una funcion de validacion, para despues enviar (0 no) los datos, segun los criterios que deben cumplirse.
}



const menuSection = document.querySelector("#menu");
const menuWhatsappBtn = document.querySelector("#menu .whatsapp-btn")

document.addEventListener("scroll", () => {
  const headerHeightOffset = document.querySelector("header").scrollHeight;

  if((window.scrollY + headerHeightOffset) >= menuSection.offsetTop || 
  menuSection.scrollHeight <= window.innerHeight) menuWhatsappBtn.classList.toggle("show", true);
  else menuWhatsappBtn.classList.toggle("show", false);
});

























