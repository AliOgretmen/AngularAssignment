import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';



@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    return  Observable.of(LEADERS).delay(2000);
  }

  getLeader(id: number): Observable<Leader> {
    return Observable.of(LEADERS.filter((leader) => (leader.id === id))[0]).delay(2000);
  }

  getFeaturedLeader(): Observable<Leader> {
    return Observable.of(LEADERS.filter((leader) => leader.featured)[0]).delay(2000);
  }


}
/* getDishes(): Promise<Dish[]> {
  return Observable.of(DISHES).delay(2000).toPromise();
}

getDish(id: number): Promise<Dish> {
  return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(2000).toPromise();
}

getFeaturedDish(): Promise<Dish> {
  return Observable.of(DISHES.filter((dish) => dish.featured)[0]).delay(2000).toPromise();
}
} */