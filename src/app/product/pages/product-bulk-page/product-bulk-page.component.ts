import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-bulk-page',
  templateUrl: './product-bulk-page.component.html',
  styles: ``
})
export class ProductBulkPageComponent {
  selectedFile: File | null = null;

  constructor(private _productService: ProductService, private router: Router) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];    
  }

  onSubmit() {
    if (!this.selectedFile) {
      console.error('No file selected!');
      return;
    }
    this._productService.bulkProducts(this.selectedFile).subscribe({
      next: () => {
        this.router.navigate(['./product']);
      }
    });
  }
}
