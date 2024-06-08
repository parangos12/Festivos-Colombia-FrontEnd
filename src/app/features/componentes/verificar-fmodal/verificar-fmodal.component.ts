import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { ColumnMode, DatatableComponent, NgxDatatableModule,SelectionType  } from '@swimlane/ngx-datatable';
import { Festivo } from '../../../core/entidades/Festivo';
import { FormsModule } from '@angular/forms';
import { FestivosService } from '../../servicios/festivos.service';

@Component({
  selector: 'app-verificar-fmodal',
  standalone: true,
  imports: [ReferenciasMaterialModule,NgxDatatableModule,FormsModule,MatDialogModule],
  templateUrl: './verificar-fmodal.component.html',
  styleUrl: './verificar-fmodal.component.css'
})
export class VerificarFModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
