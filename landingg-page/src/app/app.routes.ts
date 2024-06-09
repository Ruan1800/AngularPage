import { Component } from '@angular/core';
import { Comment } from './../../node_modules/@types/estree/index.d';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }
];
