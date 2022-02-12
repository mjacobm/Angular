import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/server/servers.component';
import { UsersComponent } from './users/users/users.component';
import { HomeComponent } from './home/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'server', component: ServersComponent},
  {path:'server/:id/edit', component: EditServerComponent},
  {path:'users', component: UsersComponent},
  {path:'users/:id/:name',component: UserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    UsersComponent,
    HomeComponent,
    UserComponent,
    EditServerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
