import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../product.model';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productList: Product[];



  @Output() byProductSelected: EventEmitter<Product>;


  ngOnInit() {
  }

}
