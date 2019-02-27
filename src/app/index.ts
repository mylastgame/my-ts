import Student from "./Model/Student";
import Person from "./Model/IPerson";


function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName ;
}

let user = new Student("Jane", "M.", "Userka");


document.body.innerHTML = greeter(user);
