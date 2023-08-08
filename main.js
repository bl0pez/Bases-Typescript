"use strict";
var Validation;
(function (Validation) {
    Validation.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    const validateDate = (myDate) => {
        return (isNaN(myDate.valueOf())) ? false : true;
    };
})(Validation || (Validation = {}));
console.log(Validation.validateText('Hello'));
//# sourceMappingURL=main.js.map