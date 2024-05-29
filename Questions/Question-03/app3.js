function familyDetails(firstName , lastName , age , gender){
this.FirstName=firstName,
    this.LastName=lastName,
    this.Age=age,
    this.Gender=gender;
    this.fullName=function(){
        return `${this.FirstName} ${this.LastName}`;
    }
}
var member1 = new familyDetails("Muhammad" , "Ahmed" , 22 , "Male");
document.write(`<div class="card">
    <h4>Printing family details.</h4>
    <span>Full Name : ${member1.fullName()}</span>
    <span>Age : ${member1.Age}</span>
    <span>Gender : ${member1.Gender}</span>
</div>`);

var member2 = new familyDetails("Ali" , "Khan" , 18 , "Male");
document.write(`<div class="card">
    <h4>Printing family details.</h4>
    <span>Full Name : ${member2.fullName()}</span>
    <span>Age : ${member2.Age}</span>
    <span>Gender : ${member2.Gender}</span>
    </div>`);

    var member3 = new familyDetails("Maryam" , "Siddiqui" , 14 , "Female");
document.write(`<div class="card">
    <h4>Printing family details.</h4>
    <span>Full Name : ${member3.fullName()}</span>
    <span>Age : ${member3.Age}</span>
    <span>Gender : ${member3.Gender}</span>
    </div>`);

    var member4 = new familyDetails("Hareem" , "Fatime" , 6 , "Female");
document.write(`<div class="card">
    <h4>Printing family details.</h4>
    <span>Full Name : ${member4.fullName()}</span>
    <span>Age : ${member4.Age}</span>
    <span>Gender : ${member4.Gender}</span>
    </div>`);