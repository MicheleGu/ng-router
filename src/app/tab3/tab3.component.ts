import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.css']
})
export class Tab3Component implements OnInit {
  products : Product[]=[
    {
      '_id': 1,
      'productName': 'Mingqi',
      'productCode': 'Gu',
      'price': 'Hidden',
      'productRating': 3.0,
      'category': 'testCategoryOne',
      'imageUrl': ''
    },
    {
      '_id': 2,
      'productName': 'Akshay',
      'productCode': 'Bains',
      'price': 'Hidden',
      'productRating': 4.0,
      'category': 'testCategoryTwo',
      'imageUrl': ''
    },
    {
      '_id': 3,
      'productName': 'Abhijit',
      'productCode': 'Paul',
      'price': 'Hidden',
      'productRating': 5.0,
      'category': 'testCategoryThree',
      'imageUrl': ''
    },
    {
      '_id': 4,
      'productName': 'Dhiren',
      'productCode': 'Patel',
      'price': 'Hidden',
      'productRating': 6.0,
      'category': 'testCategoryFour',
      'imageUrl': ''
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
