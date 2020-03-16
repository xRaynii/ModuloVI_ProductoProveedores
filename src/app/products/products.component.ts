import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Angular CRUD';
  msg: string = '';
  products = [
    {id: 1, nombre: 'Platano', descripcion: 'maduro', fecha_venc: Date(), id_proveedor: 4}
  ];

  model: any = {};
  model2: any = {};
  hideUpdate: boolean = true;

  addProduct(): void{
    this.products.push(this.model);
    localStorage.setItem('products', JSON.stringify(this.products));
    this.msg = 'Producto agregado exitosamente';
  }

  deleteProduct(i): void{
    var answer = confirm('Seguro que desea eliminar este producto?');
    if(answer){
      this.products.splice(i, 1);
      this.msg = 'Producto borrado exitosamente'
    }
  }
  myValue;

  editProduct(i: number): void{
    this.hideUpdate = false;
    this.model2.id = this.products[i].id;
    this.model2.nombre = this.products[i].nombre;
    this.model2.descripcion = this.products[i].descripcion;
    this.model2.fecha_venc = this.products[i].fecha_venc;
    this.model2.id_proveedor = this.products[i].id_proveedor;
    this.myValue = i;
  }

  updateProduct(): void{
    let x = this.myValue;
    let i = this.products.length;
    console.log(i);
    for(let j = 0; j <= i; j++){
      //console.log(j);
      if(j === x){
        this.products[j] = this.model2;
        this.msg = 'Producto actualizado exitosamente';
        this.model2 = {};
      }
    }

  }

  closeAlert(){
    this.msg = '';
  }

}
