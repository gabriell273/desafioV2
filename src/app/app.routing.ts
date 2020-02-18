import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserCreateComponent } from './user-create/user-create.component';


const APP_ROUTES: Routes = [
    {path: 'users', component: UsersComponent},
    {path: 'user/:id', component: UserDetailComponent},
    {path: 'create', component: UserCreateComponent},
    {path: '', component: HomeComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);