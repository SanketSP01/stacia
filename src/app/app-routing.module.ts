import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommercialSolarComponent } from './commercial-solar/commercial-solar.component';
import { EnergyStorageComponent } from './energy-storage/energy-storage.component';
import { EvChargingComponent } from './ev-charging/ev-charging.component';
import { GeneratorPlantComponent } from './generator-plant/generator-plant.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ResidentialSolarComponent } from './residential-solar/residential-solar.component';

const routes: Routes = [
  
  { path: 'residential-solar', component: ResidentialSolarComponent },
  { path: 'commerical-solar', component: CommercialSolarComponent },
  { path: 'energy-storage', component: EnergyStorageComponent },
  { path: 'ev-charging', component: EvChargingComponent },
  { path: 'generator-plant', component: GeneratorPlantComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  {path:'**',component: ResidentialSolarComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
