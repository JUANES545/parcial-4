import { Component } from '@angular/core';
import { CarroService } from './lista-carros.service';
import { Vehiculo } from './vehiculo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-carros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-carros.component.html',
  styleUrl: './lista-carros.component.css'
})
export class ListaCarrosComponent {
  public carros: Vehiculo[] = [];
  public totalRenault: number = 0;
  public totalChevrolet: number = 0;
  public totalNissan: number = 0;

  constructor(private carroService: CarroService) { }

  ngOnInit(): void {
    this.carroService.getCarros().subscribe((data: Vehiculo[]) => {
      this.carros = data;
      this.calculateTotals();
    });
  }

  calculateTotals(): void {
    this.totalRenault = this.carros.filter(carro => carro.marca === 'Renault').length;
    this.totalChevrolet = this.carros.filter(carro => carro.marca === 'Chevrolet').length;
    this.totalNissan = this.carros.filter(carro => carro.marca === 'Nissan').length;
  }
}
