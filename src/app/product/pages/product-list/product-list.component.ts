import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogsComponent, DialogData } from '../../../shared/components/confirm-dialogs/confirm-dialogs.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading: boolean = true;
  displayedColumns: string[] = [
    'handle',
    'title',
    'description',
    'sku',
    'grams',
    'stock',
    'price',
    'comparePrice',
    'barcode',
  ];

  constructor(private _productService: ProductService, private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.getAllProducts();   
  }

  getAllProducts(): void {
    this._productService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products;
        this.loading = false;
      },
      error: (error) => console.error('Error fetching products:', error)
    });
  }

  deleteProduct(id: string | number) {
    const dialogRef = this.dialog.open(ConfirmDialogsComponent, {
      data: {
        message: 'Are you sure to remove this product?',
        title: 'Confirm Delete' 
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.products = this.products.filter(product => product.id !== id);
        this.loading = true;
        this._productService.deleteProducts(id).subscribe(
          {
            next: () => this.loading = false,
            error: err => { },
          }
        )
      } 
    });
  }

  getColumnsWithActions(): string[] {
    return [...this.displayedColumns, 'actions'];
  }
}
