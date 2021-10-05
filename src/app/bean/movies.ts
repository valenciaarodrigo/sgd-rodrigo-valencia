export class Movies {
    title: string;
    year: number;
    director: string;
    cast: string;
    genre: string;
    notes: string;

    constructor(movie: Movies) {
      {
        this.title = movie.title;
        this.year = movie.year;
        this.director = movie.director || 'Sin especificar';
        this.cast = movie.cast || 'Sin especificar';
        this.genre = movie.genre || 'Sin especificar';
        this.notes = movie.notes || 'Sin especificar';
      }
  }
}
