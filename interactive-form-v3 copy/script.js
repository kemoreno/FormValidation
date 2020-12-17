/** setting the focus on the name input */
document.getElementById("name").focus();

/** Job role section */
//global variables needed for job role section
const job_textField = document.querySelector("#other-job-role");
const job_title = document.querySelector("#title");
job_textField.style.display = "none";

job_title.addEventListener("change", (e) => {
  if (e.target.value === "other") {
    job_textField.style.display = "";
  }
});

/**T-shirt Info Section */
//global variables needed for job role section
const design_select = document.querySelector("#design");
const color_select = document.querySelector("#color");
const color_options = document.querySelectorAll("#color option");
color_select.style.display = "none";
// on change we display the color options again with the correct colors
design_select.addEventListener("change", (e) => {
  color_select.style.display = "";
  let design_theme = e.target.value;
  for (let i = 0; i < color_options.length; i++) {
    let theme_color = color_options[i].getAttribute("data-theme");
    if (design_theme === theme_color) {
      color_options[i].hidden = false;
      color_options[i].selected = true;
    } else {
      color_options[i].hidden = true;
      color_options[i].selected = false;
    }
  }
});

/** Register for activites section*/
//global variables needed for job role section
const activites_fieldset = document.querySelector("#activities");
const checkboxes = document.querySelectorAll("#activities-box label input");
const total_p = document.querySelector("#activities-cost");
let total_cost = 0;
activites_fieldset.addEventListener("change", (e) => {
  let selected_checkbox = e.target;
  let cost = parseInt(e.target.getAttribute("data-cost"));
  let date_time = e.target.getAttribute("data-day-and-time");

  if(selected_checkbox.checked){
    total_cost += cost;
    for(let i = 0; i < checkboxes.length; i++){
        if(date_time === checkboxes[i].getAttribute("data-day-and-time") && 
            checkboxes[i] != selected_checkbox){
                checkboxes[i].disabled = true;
            }
    }
  }else{
      total_cost -= cost;
      for(let i = 0; i < checkboxes.length; i++){
          if(date_time === checkboxes[i].getAttribute("data-day-and-time")){
              checkboxes[i].disabled = false;
          }
      }
  }
  total_p.innerHTML = `Total: $${total_cost}`;
});

/**Payment Info */
////global variables needed for job role section
const payment_select = document.querySelector("#payment");
const paypal_div = document.querySelector("#paypal");
const bitcoin_div = document.querySelector("#bitcoin");
const credit_div = document.querySelector("#credit-card");
const credit_option = payment_select[1];
credit_option.selected = true;
paypal_div.style.display = "none";
bitcoin_div.style.display = "none";

payment_select.addEventListener("change", (e) => {
    let option = e.target.value;
    if(option === "bitcoin"){
        console.log(option)
        bitcoin_div.style.display = "";
        paypal_div.style.display = "none";
        credit_div.style.display = "none";
    }else if(option === "paypal"){
        console.log(option);
        paypal_div.style.display = "";
        bitcoin_div.style.display = "none";
        credit_div.style.display = "none";
        
    }else{
        credit_div.style.display = "";
        bitcoin_div.style.display = "none";
    }
})

/**Form Validation */
  // global variables for validation;
const form = document.querySelector("form");
const name_input = document.querySelector("#name");
const email_input = document.querySelector("#email");
const card_input = document.querySelector("#cc-num");
const zip_input = document.querySelector("#zip");
const cvv_input = document.querySelector("#cvv");
const activit_checkBox = document.querySelectorAll("#activities-box input");
const emailHint = document.querySelector("#email-hint");
//console.log(emailHint);
console.log(activit_checkBox);
console.log(name_input);
console.log(email_input);
console.log(card_input);
console.log(zip_input);
console.log(cvv_input);


form.addEventListener("submit", (e) => {
  if(checkName() && checkEmail() && checkCvv() && checkCard() && checkZip() && checkBoxCheck()){
  }else{
    e.preventDefault();
    console.log("one or more sectinos is invalid");
  }
});


function checkName(){
  const regex_name = /^[a-z ,.'-]+$/i;
  let name = name_input.value;
  if(regex_name.test(name)){
    return true;
  }else{
    return false;
  }
}

function checkEmail(){
  const regex_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let email = email_input.value;
  if(regex_email.test(email)){
    return true;
  }else{
    console.log("invalid email");
  }
}

function checkCard() {
  const regex_card = /^\d{13}(\d{1,3})?$/;
  let cardNum = parseInt(card_input);
  if(regex_card.test(cardNum)){
    return true;
  }else{
    return false;
  }
}

function checkCvv() {
  const regex_cvv = /^\d{3}$/;
  let cvv = parseInt(cvv_input.value);
  if(regex_cvv.test(cvv)){
    return true;
  }else{
    return false;
  }
}

function checkZip() {
  const regex_zip = /^\d{5}$/;
  let zip = parseInt(zip_input.value);
  if(regex_zip.test(zip)){
    return true;
  }else{
    return false;
  }
}

function checkBoxCheck (){
  let count = 0;
  for(let i = 0 ; i < activit_checkBox.length;i++){
    if(activit_checkBox[i].checked){
      count++
    }
  }

  if(count > 0){
    return true;

  }else{
    return false;
  }
}





  


