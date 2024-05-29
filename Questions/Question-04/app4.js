let formContainer = document.getElementById("form-container");
let formContent = document.getElementById("form-content");
let formInfoContainer = document.getElementById("info-container");
// console.log(formInfoContainer);
// console.log(form);

let userName;
let gender;
let age;
let education;
let profession;

function CitizenInfo(userName,gender,age,education,profession){
    this.Name = userName,
    this.Gender = gender,
    this.Age = age,
    this.Education = education,
    this.Profession = profession
}

let nameInput = document.getElementById("name-input");
let genderInput = document.getElementById("gender-input");
let ageInput = document.getElementById("age-input");
let educationInput = document.getElementById("education-input");
let professionInput = document.getElementById("profession-input");

function catchGender(elementGender){
    gender = elementGender.value
}
function catchEducation(elementEducation){
    education = elementEducation.value
}

function submitValues(){
    userName = nameInput.value;
    profession = professionInput.value;
    age = ageInput.value;
    console.log(userName,gender,age,education,profession);

    formContent.style.display = "none"
    formInfoContainer.style.display = "flex"

    let formHeading = document.getElementById("form-heading")
    formHeading.innerText = "Printing User Entered Details";

    var user1 = new CitizenInfo(userName,gender,age,education,profession);
    console.log(user1);
    formInfoContainer.innerHTML = 
    `<span>Name :<strong>${user1.Name}</strong></span>
    <span>Gender :<strong>${user1.Gender}</strong></span>
    <span>Age :<strong>${user1.Age}</strong></span>
    <span>Profession :<strong>${user1.Profession}</strong></span>
    <span>Education :<strong>${user1.Education}</strong></span>
    `

}