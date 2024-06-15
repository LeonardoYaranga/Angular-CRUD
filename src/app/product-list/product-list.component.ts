import { Component } from '@angular/core';
import{Product} from '../product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import {Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule,RouterOutlet,RouterLink,RouterLinkActive],
  providers: [ProductService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  deleteProduct(id: string){
    console.log(id);
this.router.navigate(['/product-delete',id]);
  }

  editProduct(id: string){
    this.router.navigate(['/product-edit',id]);
  }

  products: Product[] = [];

  constructor(private productService: ProductService,private router:Router) { }
   
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) =>{
    this.products = data
    });
  }


}
