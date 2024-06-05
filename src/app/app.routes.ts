import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './admin/products/products.component';
import { AddnewComponent } from './admin/products/addnew/addnew.component';
import { EditComponent } from './admin/products/edit/edit.component';
import { DeleteComponent } from './admin/products/delete/delete.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./productlist/productlist.component').then(
        (c) => c.ProductlistComponent
      ),
  },
  {
    path: 'details',
    loadComponent: () =>
      import('./productdetails/productdetails.component').then(
        (c) => c.ProductdetailsComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'products/add',
        component: AddnewComponent,
      },
      {
        path: 'products/:id/edit',
        component: EditComponent,
      },
      {
        path: 'products/:id/delete',
        component: DeleteComponent,
      },
    ],
  },
];
