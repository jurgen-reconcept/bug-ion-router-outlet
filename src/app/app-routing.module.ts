import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstTabsPageComponent } from './pages/first-tabs-page/first-tabs-page.component';
import { SecondTabsPageComponent } from './pages/second-tabs-page/second-tabs-page.component';

const routes: Routes = [
  {
    path: 'first', component: FirstTabsPageComponent
  },
  {
    path: 'second', component: SecondTabsPageComponent
  },
  { path: '', redirectTo: 'first', pathMatch: 'full' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
