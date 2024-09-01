import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BrowseComponent } from './components/browse/browse.component';
import { ManipulateComponent } from './components/manipulate/manipulate.component';

export const routes: Routes = [
    {path: 'about',      title: 'Sobre o Projeto',     component: AboutComponent},
    {path: 'browse',     title: 'Browse do Cadastro',  component: BrowseComponent},
    {path: 'manipulate', title: 'Manipular Registros', component: ManipulateComponent}
];
