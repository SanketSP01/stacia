import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidentialSolarComponent } from './residential-solar/residential-solar.component';
import { CommercialSolarComponent } from './commercial-solar/commercial-solar.component';
import { EnergyStorageComponent } from './energy-storage/energy-storage.component';
import { EvChargingComponent } from './ev-charging/ev-charging.component';
import { GeneratorPlantComponent } from './generator-plant/generator-plant.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AppComponent,
    ResidentialSolarComponent,
    CommercialSolarComponent,
    EnergyStorageComponent,
    EvChargingComponent,
    GeneratorPlantComponent,
    HomeComponent,
    HeaderComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
