import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';

const routes: Routes =[
    {path: 'products', component: ProductsComponent},
    {path: 'proveedores', component: ProveedoresComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
export const routingComponents = [ProductsComponent, ProveedoresComponent]