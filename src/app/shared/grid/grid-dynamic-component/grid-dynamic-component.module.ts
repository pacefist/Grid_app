import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostComponent } from './components/cost/cost.component';
import { GridDynamicComponentComponent } from './grid-dynamic-component.component';
import { TextComponent } from './components/text/text.component';
import { ContractTermComponent } from './components/contract-term/contract-term.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ],
  entryComponents: [CostComponent, TextComponent, ContractTermComponent],
  declarations: [CostComponent, GridDynamicComponentComponent, TextComponent, ContractTermComponent],
  exports: [GridDynamicComponentComponent]
})
export class GridDynamicComponentModule { }
