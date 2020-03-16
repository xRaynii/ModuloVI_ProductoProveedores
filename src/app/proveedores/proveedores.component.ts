import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Proveedores';
  msg: string = '';
  proveedores = [
    {id: 1, nombre: 'Julio', direccion: 'Av. Jacobo Majluta, Distribuidora Corripio', telefono: 809-202-8888}
  ];

  model: any = {};
  model2: any = {};
  hideUpdate: boolean = true;

  addProveedor(): void{
    this.proveedores.push(this.model);
    localStorage.setItem('proveedores', JSON.stringify(this.proveedores));
    this.msg = 'Proveedor agregado exitosamente';
  }

  deleteProveedor(i): void{
    var answer = confirm('Seguro que desea eliminar este proveedor?');
    if(answer){
      this.proveedores.splice(i, 1);
      this.msg = 'Proveedor borrado exitosamente'
    }
  }
  myValue;

  editProveedor(i: number): void{
    this.hideUpdate = false;
    this.model2.id = this.proveedores[i].id;
    this.model2.nombre = this.proveedores[i].nombre;
    this.model2.direccion = this.proveedores[i].direccion;
    this.model2.telefono = this.proveedores[i].telefono;
    this.myValue = i;
  }

  updateProveedor(): void{
    let x = this.myValue;
    let i = this.proveedores.length;
    console.log(i);
    for(let j = 0; j <= i; j++){
      //console.log(j);
      if(j === x){
        this.proveedores[j] = this.model2;
        this.msg = 'Proveedor actualizado exitosamente';
        this.model2 = {};
      }
    }

    
  }

  closeAlert(){
    this.msg = '';
  }

}
