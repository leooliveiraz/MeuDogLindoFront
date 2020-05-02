import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { ListaAnimalComponent } from './lista-animal/lista-animal.component';
import { CadastarAnimalComponent } from './cadastar-animal/cadastar-animal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesarComponent } from './pesar/pesar.component';
import { PainelAnimalComponent } from './painel-animal/painel-animal.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastrar', component: CadastarAnimalComponent },
  { path: 'editar/:id', component: CadastarAnimalComponent },
  { path: 'meus-bichinhos', component: ListaAnimalComponent },
  { path: 'painel/:idAnimal', component: PainelAnimalComponent },
  { path: 'pesar', component: PesarComponent },
  { path: 'sobre', component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
