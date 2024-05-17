import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Festivo } from '../../../core/entidades/Festivo';
import { FormsModule } from '@angular/forms';
import { FestivosService } from '../../servicios/festivos.service';

@Component({
  selector: 'app-obtener-festivos',
  standalone: true,
  imports: [ReferenciasMaterialModule,NgxDatatableModule,FormsModule],
  templateUrl: './obtener-festivos.component.html',
  styleUrl: './obtener-festivos.component.css',
})
export class ObtenerFestivosComponent {

  public anio: number =2024;
  public columnas = [
    { prop: 'festivo', name: 'Festivo' },
    { prop: 'fecha', name: 'Fecha' }
    ];
  public festivos:Festivo[]=[];
  public modoColumna=ColumnMode;
   
  constructor(private servicio:FestivosService) { 
    this.obtenerFestivos();
  }

  obtenerFestivos(){
    if(this.anio==null){
      window.alert("Debe ingresar un año");
      return;
    }
    this.servicio.listarFestivosAño(this.anio).subscribe({
      next: response => {
        this.festivos = response;
      },
      error: error => {
        console.log(error);}
      });
  }

}
