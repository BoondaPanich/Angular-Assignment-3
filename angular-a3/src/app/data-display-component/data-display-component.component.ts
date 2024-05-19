import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable, mergeMap, toArray } from 'rxjs';

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

@Component({
  selector: 'app-data-display-component',
  standalone: true,
  imports: [JsonPipe, HttpClientModule, CommonModule],
  templateUrl: './data-display-component.component.html',
  styleUrl: './data-display-component.component.css',
})
export class DataDisplayComponentComponent implements OnInit {
  // jokes: Joke[] = [];
  filteredJokes: Joke[] = [];

  constructor(private service: JokeService) {}

  ngOnInit(): void {
    this.service.filteredJokes$.subscribe({
      next: (jokes) => {
        this.filteredJokes = jokes;
      },
      error: (err) =>
        console.error('Error subscribing to filtered jokes:', err),
    });
  }
}
