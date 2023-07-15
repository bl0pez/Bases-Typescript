"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo!';
        }
    }
    class Villain extends Mutante {
        consumirHumanos() {
            return 'Ñam ñam ñam';
        }
    }
    const wolwerine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villain('Magneto', 'Magnus');
    const printName = (character) => console.log(character.realName);
    printName(wolwerine);
})();
(() => {
    class Avenge {
        static getAvgAge() {
            return `${this.name} ${this.avgAge}`;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team}) ${this.realName}`;
        }
    }
    Avenge.avgAge = 35;
    const antaman = new Avenge('Antaman', 'Capi', 'Scott Lang');
})();
(() => {
    class Avenge {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenge called');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenge {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen called');
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 caracteres');
            }
            this.name = name;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
})();
//# sourceMappingURL=main.js.map