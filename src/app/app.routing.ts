import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GenreComponent } from './genre/genre.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

const appRoutes: Routes = [

    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'genre',
        component: GenreComponent
    },
    {
        path: 'album',
        component: AlbumComponent
    },
    {
        path: 'artist',
        component: ArtistComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
