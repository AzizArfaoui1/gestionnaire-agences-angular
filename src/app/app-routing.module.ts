import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import { AgtunisComponent } from './agtunisnord/agtunis.component';
import { AgbizerteComponent } from './agbizerte/agbizerte.component';
import { AggafsaComponent } from './aggafsa/aggafsa.component';
import { AgjendoubaComponent } from './agjendouba/agjendouba.component';
import { AgmednineComponent } from './agmednine/agmednine.component';
import { AgmonastirComponent } from './agmonastir/agmonastir.component';
import { AgnabeulComponent } from './agnabeul/agnabeul.component';
import { AgsfaxComponent } from './agsfax/agsfax.component';
import { AgsousseComponent } from './agsousse/agsousse.component';
import { DirectionReginaleComponent } from './direction-reginale/direction-reginale.component';
import { SiegeComponent } from './siege/siege.component';
import { ImmeublesComponent } from './immeubles/immeubles.component';
import { EmployeformComponent } from './employeform/employeform.component';
import { SiegeaddComponent } from './siegeadd/siegeadd.component';
import { ImmeubleaddComponent } from './immeubleadd/immeubleadd.component';
import { DirectionaddComponent } from './directionadd/directionadd.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  {'path':'edit/:id','title':'edit',component:EditComponent},
  {'path' :'login','title':'login',component: LoginComponent},
  {'path': 'home','title':'home' ,component: HomeComponent },
  {'path': 'immeuble','title':'immeuble' ,component: ImmeublesComponent },
  {'path': 'agtunisnord','title':'ag. tunis nord',component: AgtunisComponent},
  {'path': 'agbizerte','title':'ag. bizerte',component: AgbizerteComponent},
  {'path': 'aggafsa','title':'ag. gafsa',component: AggafsaComponent},
  {'path': 'agjendouba','title':'ag. jendouba',component: AgjendoubaComponent},
  {'path': 'agmedenine','title':'ag. medenine',component: AgmednineComponent},
  {'path': 'agmonastir','title':'ag. monastir',component: AgmonastirComponent},
  {'path': 'agnabeul','title':'ag. nabeul',component: AgnabeulComponent},
  {'path': 'agsousse','title':'ag. sousse',component: AgsousseComponent},
  {'path': 'agsfax','title':'ag. sfax',component: AgsfaxComponent},
  {'path': 'agtunisnord','title':'ag. tunis nord',component: AgtunisComponent},
  {'path' :'direction','title':'direction',component: DirectionReginaleComponent},
  {'path':'employe','title':'employe',component:EmployeformComponent},
  {'path' :'siege','title':'siege',component: SiegeComponent},
  {'path' :'siegeadd','title':'siegeadd',component: SiegeaddComponent},
  {'path' :'immeubleadd','title':'immeubleadd',component: ImmeubleaddComponent},
  {'path' :'directionadd','title':'directionadd',component: DirectionaddComponent},
  {'path':'**',redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
