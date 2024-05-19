import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JokeService } from '../joke.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-select-component',
  standalone: true,
  imports: [CommonModule, AsyncPipe, FormsModule],
  templateUrl: './data-select-component.component.html',
  styleUrl: './data-select-component.component.css',
})
export class DataSelectComponentComponent {
  jokeTypes: string[] = ['all', 'programming', 'general', 'knock-knock', 'dad'];
  searchQuery: string = '';
  constructor(private service: JokeService) {}

  filterJokes(type: string): void {
    // console.log('Filter button clicked with type:', type);
    this.service.filterJokes(type);
  }

  searchJokes(query: string): void {
    this.service.searchJokes(query);
  }
}
