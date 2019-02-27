define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Student {
        constructor(firstName, middleInitial, lastName) {
            this.firstName = firstName;
            this.middleInitial = middleInitial;
            this.lastName = lastName;
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
    }
    exports.default = Student;
});
