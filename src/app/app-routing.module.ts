import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditHomeComponent } from './edit-home/edit-home.component';
import { LoginComponent } from './login/login.component';
import { EquipmentComponent } from './equipment/equipment.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"edit-home", component:EditHomeComponent},
  {path:"login", component:LoginComponent},
  {path:"equipment",component:EquipmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
