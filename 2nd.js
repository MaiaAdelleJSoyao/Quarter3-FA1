var FirstName = prompt("First name?");
var LastName = prompt("Last name?");
var BirthYear = prompt("Birth year?");
var age = 2025 - BirthYear;

document.getElementById("wow").innerHTML = "Hello " + FirstName + " " + LastName + "! " +
                                        "How does it feel to be " + age + 
                                        " years old?";