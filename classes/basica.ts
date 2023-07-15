(() => {

    class Avenge {
        // private name: string;
        // public team: string;
        // public realName: string;

        //Las propiedades estaticas se pueden consumir haciendo referencia a la clase
        static avgAge: number = 35;
        static getAvgAge() {
            return `${this.name} ${this.avgAge}`;
        }

        constructor(
            private name: string, 
            public team: string, 
            public realName: string) {
            // this.name = name;
            // this.team = team;
            // this.realName = realName;
        }

        public bio() {
            return `${this.name} (${this.team}) ${this.realName}`;
        }


    }

    const antaman = new Avenge('Antaman', 'Capi', 'Scott Lang');
    // console.log(antaman);
    // console.log(antaman.bio());
    // console.log(Avenge.getAvgAge());


})();