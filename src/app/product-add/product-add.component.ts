import { Component } from '@angular/core';
import{Product} from '../product';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  product: Product = {id: '0', name: '', price: 0};

  constructor(private productService: ProductService, private router:Router) { }

    addProduct(){
      this.productService.addProduct(this.product).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
    
}
