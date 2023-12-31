import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
