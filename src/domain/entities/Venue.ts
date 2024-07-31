export interface Rango {
    min: number;
    max: number;
  }
  
  export class Venue {
    constructor(
      public id: number,
      public techo: string,
      public tipo: string,
      public deporte: string,
      public rango: Rango,
      public tamano: Rango,
      public imagen: string,
      public venue: string,
      public ciudad: string,
      public departamento: string,
      public inauguracion: number,
      public aforo: number,
    ) {}
  }
  