import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit {
  productForm: FormGroup;
  isEdit: boolean = false;
  productId: string | null = null;
  product: Product | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private _productService: ProductService,
    private route: ActivatedRoute
  ) {

    this.productForm = this.formBuilder.group({
      handle: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      sku: ['', Validators.required],
      grams: ['', Validators.required],
      stock: ['', Validators.required],
      price: ['', Validators.required],
      comparePrice: ['', Validators.required],
      barcode: ['']
    });
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.productId = params['id'];
        this._productService.getProductById(this.productId!)
          .subscribe({
            next: prod => {
              this.product = prod;
              this.productForm.patchValue({
                handle: this.product.handle,
                title: this.product.title,
                description: this.product.description,
                sku: this.product.sku,
                grams: this.product.grams,
                stock: this.product.stock,
                price: this.product.price,
                comparePrice: this.product.comparePrice,
                barcode: this.product.barcode
              });
            }
          });

      }
    })



  }

  createOrUpdateProduct() {
    if (this.productForm.invalid) {
      return;
    }

    const productData: Product = this.productForm.value;

    const productObservable = this.isEdit ?
      this._productService.updateProducts(this.productId!, productData) :
      this._productService.createProducts(productData);

    productObservable.subscribe({
      next: () => {
        this.productForm.reset();
      }
    });
  }



}
