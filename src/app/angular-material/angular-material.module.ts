import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';


const materialConst = [
  MatGridListModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatTabsModule,
  MatSelectModule,
  MatMenuModule
];

@NgModule({
  imports: [materialConst],
  exports: [materialConst],
})
export class AngularMaterialModule {}
