import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductBulkPageComponent } from './pages/product-bulk-page/product-bulk-page.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { authTokenGuard } from '../shared/guards/auth-token.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    canActivate: [authTokenGuard],
    children: [
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'add-product',
        component: NewProductComponent
      },
      {
        path: 'edit/:id',
        component: NewProductComponent
      },
      {
        path: 'products-bulk',
        component: ProductBulkPageComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
