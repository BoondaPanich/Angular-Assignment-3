import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  tap,
  throwError,
} from 'rxjs';

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  private jokes: Joke[] = [];
  private filteredJokesSubject: BehaviorSubject<Joke[]> = new BehaviorSubject<
    Joke[]
  >([]);
  filteredJokes$: Observable<Joke[]> = this.filteredJokesSubject.asObservable();

  constructor(private http: HttpClient) {
    if (this.jokes.length === 0) {
      this.fetchJokes();
    } else {
      // If jokes array is not empty
      this.filteredJokesSubject.next(this.jokes);
    }
  }

  private fetchJokes(): void {
    console.log('Fetching jokes...');
    this.http
      .get<Joke[]>('https://official-joke-api.appspot.com/random_ten')
      .pipe(
        tap((jokes) => {
          // console.log('Fetched', jokes);
          this.jokes = jokes;
          this.filteredJokesSubject.next(this.jokes); // Update filtered jokes after fetching
        }),
        catchError((error) => {
          console.error('Error fetching jokes:', error);
          return throwError(error);
        })
      )
      .subscribe();
  }

  filterJokes(type: string): void {
    // console.log('Filter type:', type);
    if (type === '' || type === 'all') {
      this.filteredJokesSubject.next(this.jokes); // Show all jokes
    } else {
      const filteredJokes = this.jokes.filter((joke) => joke.type === type);
      this.filteredJokesSubject.next(filteredJokes); // Update
      // console.log('Filtered:', filteredJokes);
    }
  }

  searchJokes(query: string): void {
    const lowercaseQuery = query.toLowerCase().trim();
    if (lowercaseQuery === '') {
      this.filteredJokesSubject.next(this.jokes);
    } else {
      // not search type
      const filteredJokes = this.jokes.filter(
        (joke) =>
          joke.setup.toLowerCase().includes(lowercaseQuery) ||
          joke.punchline.toLowerCase().includes(lowercaseQuery)
      );
      this.filteredJokesSubject.next(filteredJokes);
    }
  }
}
