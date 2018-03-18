import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Component } from './tab3.component';

export const ROUTES: Routes = [];
@NgModule({
  declarations: [
    Tab3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [],
  bootstrap: [Tab3Component]
})
export class Tab3Module { }