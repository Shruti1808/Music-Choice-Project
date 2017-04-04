import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Artist } from '../artist.model';
import { ArtistService } from '../artist.service';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
  providers: [GenreService]
})


export class ArtistComponent implements OnInit {
    artistId: number;
    artistsMatchGenre: Artist;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private genreService: GenreService
  ) { }

  ngOnInit() {
      this.route.params.forEach((urlParam) => {
  this.artistId = parseInt(urlParam['id']);
});
    this.artistsMatchGenre = this.genreService.getArtistsByGenreId(this.artistId);
  }

}
