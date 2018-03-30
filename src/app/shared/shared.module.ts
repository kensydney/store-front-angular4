import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClickableNumComponent } from './components/clickableNum.component';


@NgModule({ 
  providers: [],
  declarations: [
    ClickableNumComponent
  ],
  exports: [
    RouterModule,
    ClickableNumComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {}