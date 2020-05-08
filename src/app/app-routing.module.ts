import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { ListaAnimalComponent } from './lista-animal/lista-animal.component';
import { CadastarAnimalComponent } from './cadastar-animal/cadastar-animal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesarComponent } from './pesar/pesar.component';
import { PainelAnimalComponent } from './painel-animal/painel-animal.component';
import { AuthGuardService } from './service/auth/auth-guard.service';
import { VermifugarComponent } from './vermifugar/vermifugar.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastrar', component: CadastarAnimalComponent, canActivate: [AuthGuardService] },
  { path: 'editar/:id', component: CadastarAnimalComponent, canActivate: [AuthGuardService] },
  { path: 'meus-bichinhos', component: ListaAnimalComponent, canActivate: [AuthGuardService] },
  { path: 'painel/:idAnimal', component: PainelAnimalComponent, canActivate: [AuthGuardService] },
  { path: 'pesar', component: PesarComponent, canActivate: [AuthGuardService] },
  { path: 'vermifugar', component: VermifugarComponent, canActivate: [AuthGuardService] },
  { path: 'sobre', component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }