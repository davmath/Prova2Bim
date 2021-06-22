import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoCreateComponent } from './components/medico/medico-create/medico-create.component';

import { HomeComponent } from './views/home/home.component';
import { MedicoCrudComponent } from './views/medico-crud/medico-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "medico",
    component: MedicoCrudComponent
  },
  {
    path: "medico/cadastrar",
    component: MedicoCreateComponent
  }

];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
