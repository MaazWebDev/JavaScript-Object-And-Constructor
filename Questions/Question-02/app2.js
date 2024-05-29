var userDetails = {
    firstName:"Maaz",
    lastName:"Khan",
    email:"maaz66376@gmail.com",
    password:"maaz123",
    city:"Karachi",
    country:"Pakistan",
    age:24
}

if("age" in userDetails && "country" in userDetails){
    document.write(`<div class="card">
    <h4>Checking if the Age and Country exists in userDetails object or not !</h4>
    <span>The property Age and Country present in userDetails object .</span>
    </div>`)
}else{
    document.write(`<div class="card">
    <h4>Checking if the Age and Country exists in userDetails object or not !</h4>
    <span>The property Age and Country not present in userDetails object .</span>
    </div>`)
}
if(userDetails.hasOwnProperty("firstName") && userDetails.hasOwnProperty("lastName")){
    document.write(`<div class="card">
    <h4>Checking if the firstName and lastName exists in userDetails object or not !</h4>
    <span>The property firstName and lastName present in userDetails object .</span>
    </div>`)
}else{
    document.write(`<div class="card">
    <h4>Checking if the firstName and lastName exists in userDetails object or not !</h4>
    <span>The property firstName and lastName not present in userDetails object .</span>
    </div>`)
}