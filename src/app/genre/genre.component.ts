import { Component, OnInit } from '@angular/core';
import { Genre } from '../genre.model';
import { GenreService } from '../genre.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-genre',
    templateUrl: './genre.component.html',
    styleUrls: ['./genre.component.css'],
    providers: [GenreService]
})
export class GenreComponent implements OnInit {
    genreList : Genre[];


    constructor(private router: Router, private genreService: GenreService){ }

    ngOnInit(){
        this.genreList = this.genreService.getGenres();
    }

    goToArtistPage(clickedGenre: Genre){
        this.router.navigate(['artist', clickedGenre.id])
    };

}
