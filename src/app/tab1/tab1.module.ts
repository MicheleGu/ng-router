import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Component } from './tab1.component';

export const ROUTES: Routes = [];
@NgModule({
  declarations: [
    Tab1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [],
  bootstrap: [Tab1Component]
})
export class Tab1Module { }