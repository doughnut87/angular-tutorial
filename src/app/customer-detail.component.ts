import { Component, Input } from '@angular/core';

import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'customer-detail', // to use , so this in html <my-app>
  templateUrl: 'customer-detail.component.html'
})
export class CustomerDetailComponent  { 

  regions = ['North', 'East', 'South', 'West', 'Midwest' ]

  states = ['California', 'Quebec', 'Jalisco', 'Illinois', 'Stateless!' ]


  @Input() customer: Customer;
  showAddress = false;

}
 