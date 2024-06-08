import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-verificar-fmodal',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './verificar-fmodal.component.html',
  styleUrl: './verificar-fmodal.component.css'
})
export class VerificarFModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
