import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserInformationComponent } from './user-information/user-information.component';

const routes: Routes = [
  {path: 'user-list', component: UserListComponent},
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'user-information/:id', component: UserInformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserDetailsComponent, UserListComponent, UserInformationComponent];
