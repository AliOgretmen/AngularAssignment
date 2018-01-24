import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';


//import { Comment } from '../shared/comment';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

 
  dish: Dish;
  //comments: Comment[] = this.dish.comments;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);
  }
  
  goBack(): void {
    this.location.back();
  }

}