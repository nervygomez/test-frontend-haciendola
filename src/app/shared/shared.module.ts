import { NgModule } from '@angular/core';
import { Page404Component } from './pages/page-404/page-404.component';
import { ConfirmDialogsComponent } from './components/confirm-dialogs/confirm-dialogs.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Page404Component,
    ConfirmDialogsComponent,
  ],
  imports: [
    MaterialModule,
    RouterModule
  ],
  exports: [
    Page404Component
  ]
})
export class SharedModule { }
