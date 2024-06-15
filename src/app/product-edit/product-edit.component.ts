import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-edit',
  standalone: true,
  providers: [ProductService],
  imports: [FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  product: Product = {id: '0', name: '', price: 0}; 

  constructor(
    private productService: ProductService,
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(Router) private router: Router
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Product ID:', id);
    this.productService.getProduct(id).subscribe((data: Product) => {
    this.product = data;
    console.log('Product:', this.product);
    
    });
  }

  updateProduct(){
    this.productService.updateProduct(this.product).subscribe(() => {
      this.router.navigate(['/']);
    })
  }
  
}
