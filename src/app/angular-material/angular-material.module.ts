import { NgModule } from '@angular/core';
import {MatGridListModule, } from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';


const materialConst = [
  MatGridListModule, MatButtonModule, MatFormFieldModule, MatInputModule
]

@NgModule({
  imports: [materialConst],
  exports: [materialConst]
})
export class AngularMaterialModule { }
