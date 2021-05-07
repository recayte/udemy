"use strict";
(() => {
    class Avenger {
        // nombre:string;
        // equipo:string;
        // nombreReal:string;
        // PuedePelear: boolean;
        // pelasGanadas:number;
        constructor(nombre, equipo, nombreReal, PuedePelear, pelasGanadas) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.PuedePelear = PuedePelear;
            this.pelasGanadas = pelasGanadas;
        }
    }
    const antman = new Avenger("antman", "capi", "Scoot", true, 5);
    console.log(antman);
})();
