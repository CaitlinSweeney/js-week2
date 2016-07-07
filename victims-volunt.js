//Victims & Volunteers

//Victims
//This return a true or false for a numeric imput
var victimAmt = prompt("How many victims do you wish to enter?");
function isVictim(victimAmt) {
  if(victimAmt == !isNaN(parseFloat(victimAmt)) && isFinite(victimAmt)){
    return victimAmt
  }else{
    prompt("Please enter a valid numeric digit.");
  }
}

var victims = [];
var volunteers = [];

var names = [];
var streets = [];
var phones = [];

var vName;
var vStreet;
var vPhone;
var i;


function victimInfo(victimcount){
  var person
  for (i =0; i < victimcount; i++ ){
    vName = prompt("What is the Victims Name?", "Name");
    vStreet = prompt("What is the Victims Street", "Street Address" );
    vPhone = prompt("What is the Victims Phone Number" ,"Number" );
    console.log('vname', vName, 'street', vStreet, 'phone', vPhone);
    person = {}
    person.fname = vName
    person.street = vStreet
    person.phone = vPhone
    victims.push(person)
  }
}

victimInfo(victimAmt);


//Volunteers
//This return a true or false for a numeric imput

var voluntAmt = prompt("How many volunteers do you wish to enter?");
function isVolunteer(voluntAmt) {
  if(voluntAmt == !isNaN(parseFloat(voluntAmt)) && isFinite(voluntAmt)){
    return voluntAmt
  }else{
    prompt("Please enter a valid numeric digit.");
  }
}

function voluntInfo(voluntcount){
  var person
  for (i =0; i < voluntcount; i++ ){
    vName = prompt("What is the Volunteer Name?", "Name");
    vStreet = prompt("What is the Volunteer Street", "Street Address" );
    vPhone = prompt("What is the Volunteer Phone Number" ,"Number" );
    console.log('vName', vName, 'street', vStreet, 'phone', vPhone);
    person = {}
    person.fname = vName;
    person.street = vStreet;
    person.phone = vPhone
    volunteers.push(person)
  }
}

voluntInfo(voluntAmt);
