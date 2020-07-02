import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, HttpClientModule, MaterialModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
