import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SiegeComponent } from './siege/siege.component';
import { ImmeublesComponent } from './immeubles/immeubles.component';
import { DirectionReginaleComponent } from './direction-reginale/direction-reginale.component';
import { AgtunisComponent } from './agtunisnord/agtunis.component';
import { AgnabeulComponent } from './agnabeul/agnabeul.component';
import { AgbizerteComponent } from './agbizerte/agbizerte.component';
import { AgsousseComponent } from './agsousse/agsousse.component';
import { AgmonastirComponent } from './agmonastir/agmonastir.component';
import { AggafsaComponent } from './aggafsa/aggafsa.component';
import { AgsfaxComponent } from './agsfax/agsfax.component';
import { AgmednineComponent } from './agmednine/agmednine.component';
import { AgjendoubaComponent } from './agjendouba/agjendouba.component';
import { NavabarComponent } from './navabar/navabar.component';
import { EmployeformComponent } from './employeform/employeform.component';
import { SiegeaddComponent } from './siegeadd/siegeadd.component';
import { ImmeubleaddComponent } from './immeubleadd/immeubleadd.component';
import { DirectionaddComponent } from './directionadd/directionadd.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SiegeComponent,
    ImmeublesComponent,
    DirectionReginaleComponent,
    AgtunisComponent,
    AgnabeulComponent,
    AgbizerteComponent,
    AgsousseComponent,
    AgmonastirComponent,
    AggafsaComponent,
    AgsfaxComponent,
    AgmednineComponent,
    AgjendoubaComponent,
    NavabarComponent,
    EmployeformComponent,
    SiegeaddComponent,
    ImmeubleaddComponent,
    DirectionaddComponent,
    EditComponent,
    
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule, RouterOutlet
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
