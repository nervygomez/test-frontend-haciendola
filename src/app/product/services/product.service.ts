import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { environments } from '../../../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environments.baseUrl;

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/api/product`);
  }

  getProductById(id: string | number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/api/product/${id}`);
  }

  createProducts(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/api/product`, product);
  }

  updateProducts(id: string | number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/api/product/${id}`, product);
  }

  deleteProducts(id: string | number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/api/product/${id}`);
  }

  bulkProducts(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.baseUrl}/api/product/bulk`, formData);
  }
}
