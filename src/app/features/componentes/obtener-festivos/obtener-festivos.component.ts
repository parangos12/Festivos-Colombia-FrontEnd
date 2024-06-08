import { Component, ViewChild } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { ColumnMode, DatatableComponent, NgxDatatableModule,SelectionType  } from '@swimlane/ngx-datatable';
import { Festivo } from '../../../core/entidades/Festivo';
import { FormsModule } from '@angular/forms';
import { FestivosService } from '../../servicios/festivos.service';



@Component({
  selector: 'app-obtener-festivos',
  standalone: true,
  imports: [ReferenciasMaterialModule,NgxDatatableModule,FormsModule],
  templateUrl: './obtener-festivos.component.html',
  styleUrl: './obtener-festivos.component.css'})
export class ObtenerFestivosComponent {
  @ViewChild(DatatableComponent) table: DatatableComponent | undefined;

  public anio: number =2024;
  public festivos:Festivo[]=[];
   
  constructor(private servicio:FestivosService) { 
    this.obtenerFestivos();
  }
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;

  public columnas = [
    { name: "Fecha", prop: "fecha" },
    { name: "Festivo", prop: "festivo" }
    ];

  obtenerFestivos(){
    if(this.anio==null){
      window.alert("Debe ingresar un año");
      return;
    }
    this.servicio.listarFestivosAño(this.anio).subscribe({
      next: response => {
        console.log(response);
        this.festivos = response;   
      },
      error: error => {
        console.log(error);}
      });
  }

}
