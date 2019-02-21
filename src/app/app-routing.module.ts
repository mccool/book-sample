import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CartComponent } from './cart/cart.component';
import { BookContainerComponent } from './book-container/book-container.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  {
    path: 'books',
    component: BookContainerComponent,
    children: [
      { path: ':id', component: BookDetailComponent }
    ]
  },
  { path: '', redirectTo: '/books', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
