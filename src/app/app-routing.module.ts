import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GotQuotesComponent } from './got-quotes/got-quotes.component';
const routes: Routes = [

  {
    path:'',
    component: HomeComponent
  },
  {
    path:'contact-us',
    component: ContactUsComponent
  },
  {
    path:'got-quotes',
    component: GotQuotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
