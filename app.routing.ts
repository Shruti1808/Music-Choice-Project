import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
