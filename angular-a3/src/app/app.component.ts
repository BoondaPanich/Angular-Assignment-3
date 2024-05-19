import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataDisplayComponentComponent } from './data-display-component/data-display-component.component';
import { DataSelectComponentComponent } from './data-select-component/data-select-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { JokeService } from './joke.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DataDisplayComponentComponent,
    DataSelectComponentComponent,
    HttpClientModule,
    CommonModule,
  ],
  providers: [JokeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-a3';
}
