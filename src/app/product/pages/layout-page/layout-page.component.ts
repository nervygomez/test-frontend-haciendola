import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

  public sidebarOptions = [
    {
      label: 'Products',
      icon: 'label',
      url: './list'
    },
    {
      label: 'Add product',
      icon: 'add',
      url: './add-product'
    },
    {
      label: 'Products Bulk',
      icon: 'search',
      url: './products-bulk'
    }
  ]

  constructor(private _authService: AuthService) { }

  logOut() {
    this._authService.logOut();
  };
  
  
}
