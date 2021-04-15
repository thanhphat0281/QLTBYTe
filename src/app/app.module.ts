import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditHomeComponent } from './edit-home/edit-home.component';
import { LoginComponent } from './login/login.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { EquipmentComponent } from './equipment/equipment.component';
import { ChangeNameEquipmentComponent } from './equipment/change-name-equipment/change-name-equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditHomeComponent,
    LoginComponent,
    EquipmentComponent,
    ChangeNameEquipmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,DropDownListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
