define(["require", "exports", "./Model/Student"], function (require, exports, Student_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function greeter(person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }
    let user = new Student_1.default("Jane", "M.", "Userka");
    document.body.innerHTML = greeter(user);
});
