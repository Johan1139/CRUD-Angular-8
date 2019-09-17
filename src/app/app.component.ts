import { Component } from '@angular/core';
import { Cars } from './models/cars';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    carrosArray: Cars[] = [
      {id: 1, nombre: "Sandero", marca: "Renoult", pais: "Colombia"},
      {id: 2, nombre: "Twingo", marca:"Renoult", pais:"Francia"},
      {id: 3, nombre: "Mazda 3", marca:"Mazda", pais:"Japón"}
    ];

    selectedCars: Cars = new Cars();

    editar(carro: Cars){
        this.selectedCars = carro;
    }

    agregaroeditar(){
      if (this.selectedCars.id == 0) {
        this.selectedCars.id = this.carrosArray.length + 1;
        this.carrosArray.push(this.selectedCars);
      }
      this.selectedCars = new Cars();
    }

    eliminar(){
      if (confirm('¿Esta seguro que desea eliminar el automovil?')) {
        this.carrosArray = this.carrosArray.filter(i => i != this.selectedCars)
        this.selectedCars = new Cars();
      }
    }
}
