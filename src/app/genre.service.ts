import { Injectable } from '@angular/core';
import { GenreComponent } from './genre/genre.component';
import { GENRES } from './mock-genres';
import { ARTISTS } from './mock-artists';
import { Artist } from './artist.model';

@Injectable()
export class GenreService {

  constructor() { }


   getGenres(){
       return GENRES;
   }

   getArtistsByGenreId(artistId: number) {
       for (var i =0 ; i<= GENRES.length-1; i++){
           if(GENRES[i].id === artistId) {
               return ARTISTS[i];
           }
       }
   }
}
