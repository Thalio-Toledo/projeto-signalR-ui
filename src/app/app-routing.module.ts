import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealPromoComponent } from './real-promo/real-promo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PromocaoComponent } from './promocao/promocao.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'realPromo',
    pathMatch: 'full'
  },
  {
    path:'realPromo',
    component:RealPromoComponent
  },
  {
    path:'cadastro',
    component:CadastroComponent
  },
  {
    path:'promocoes',
    component:PromocaoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
