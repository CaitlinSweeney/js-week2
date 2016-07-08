//Victims & Volunteers

var victims = [];
var volunteers = [];
var names = [];
var streets = [];
var phones = [];
var vName;
var vStreet;
var vPhone;
var i;

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

//Alert victim and volunteer amount, & name list.
function list(array){
  var result = "";
  for (i=0; i < array.length; i++){
    var item = array[i]
    console.log(item.fname + " " + item.street + " " + item.phone);
    result += item.fname + " " + item.street + " " + item.phone + "\n";
  }
  return result;
}

  alert(
    victimAmt + ' ' + "people" + ' in need\n' +
    list(victims) + ' ' +
    voluntAmt + ' ' + "volunteers" + ' in need\n' +
    list(volunteers) + ' '
  );
