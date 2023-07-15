(() => {

    class Avenge {

        constructor(
            public name: string,
            public realName: string,
        ) {
            console.log('Constructor Avenge called');

        }

        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }

    }

    class Xmen extends Avenge {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean,
        ){
            super( name, realName)
            console.log('Constructor Xmen called');
        }

        get fullName(){
            return `${this.name} - ${this.realName}`;
        }

        set fullName( name: string){
            if( name.length < 3){
                throw new Error('El nombre debe ser mayor a 3 caracteres');
            }
            this.name = name;
        }

        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }

    }

    // const wolverine = new Xmen('Wolverine', 'Logan', true);
    // console.log(wolverine);
    // wolverine.getFullNameDesdeXmen();
    // //Los getters se llaman como propiedades
    // console.log(wolverine.fullName);
    // wolverine.fullName = 'Ciclope';

    // console.log(wolverine.fullName);

})();