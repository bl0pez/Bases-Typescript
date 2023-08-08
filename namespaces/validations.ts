/**
 * namespace es una forma de agrupar código relacionado
 * en un contenedor único.
 */
namespace Validation {
   
    export const validateText = (text: string): boolean => {
        return (text.length > 3) ? true : false;
    }

    const validateDate = (myDate: Date): boolean => {
        return ( isNaN(myDate.valueOf()) ) ? false : true;
    }

}

console.log(Validation.validateText('Hello'));
