import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { FruitComponent } from "./fruits/fruit/fruit.component";
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterModule, FruitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-app';
}
