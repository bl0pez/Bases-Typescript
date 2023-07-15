(() => {

    /**
     * Las clases abstractas no se pueden instanciar
     * Se usan para heredar de ellas
     * Se pueden usar como interfaces
     */
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string,
        ){}
    }

    class Xmen extends Mutante {

        salvarMundo(){
            return 'Mundo a salvo!';
        }

    }
    class Villain extends Mutante {

        consumirHumanos(){
            return 'Ñam ñam ñam';
        }
    }

    const wolwerine: Xmen = new Xmen('Wolverine', 'Logan');
    const magneto: Villain = new Villain('Magneto', 'Magnus');

    // console.log(wolwerine.salvarMundo());
    // console.log(magneto.consumirHumanos());

    const printName = ( character: Mutante ) => console.log(character.realName);

    printName(wolwerine);
    

})();