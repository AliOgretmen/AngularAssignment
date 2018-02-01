import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';

import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';


import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DishService {

  constructor(private restangular: Restangular,
    private processHttpmsgService: ProcessHttpmsgService) { }
    getDishes(): Observable<Dish[]> {
      return this.restangular.all('dishes').getList();
    }
  
    getDish(id: number): Observable<Dish> {
      return  this.restangular.one('dishes',id).get();
    }
  
    getFeaturedDish(): Observable<Dish> {
      return this.restangular.all('dishes').getList({featured: true})
      .map(dishes => dishes[0]);
    }
  
    getDishIds(): Observable<number[] | any> {
      return this.getDishes()
        .map(dishes => { return dishes.map(dish => dish.id) })
        .catch(error => { return error; } );
    }
   
}
 


//Promise
/* getDishes(): Promise<Dish[]> {
  return  new Promise(resolve=> {
    // Simulate server latency with 2 second delay
      setTimeout(() => resolve(DISHES), 2000);
  });
}

getDish(id: number): Promise<Dish> {
  return new Promise(resolve=> {
    // Simulate server latency with 2 second delay
      setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
  });
}

getFeaturedDish(): Promise<Dish> {
  return new Promise(resolve=> {
    // Simulate server latency with 2 second delay
      setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
  });
} */


// ----Asycnonius----

/* getDishes(): Observable<Dish[]> {
  return Observable.of(DISHES).delay(2000);
}

getDish(id: number): Observable<Dish> {
  return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(2000);
}

getFeaturedDish(): Observable<Dish> {
  return Observable.of(DISHES.filter((dish) => dish.featured)[0]).delay(2000);
}
getDishIds(): Observable<number[]> {
  return Observable.of(DISHES.map(dish => dish.id));
} */

// --Http--
/** constructor(private http: Http,
    private processHttpmsgService: ProcessHttpmsgService) { }
    getDishes(): Observable<Dish[]> {
      return this.http.get(baseURL + 'dishes')
                      .map(res => { return this.processHttpmsgService.extractData(res); })
                      .catch(error => { return this.processHttpmsgService.handleError(error); });
    }
  
    getDish(id: number): Observable<Dish> {
      return  this.http.get(baseURL + 'dishes/'+ id)
                      .map(res => { return this.processHttpmsgService.extractData(res); })
                      .catch(error => { return this.processHttpmsgService.handleError(error); });
    }
  
    getFeaturedDish(): Observable<Dish> {
      return this.http.get(baseURL + 'dishes?featured=true')
                      .map(res => { return this.processHttpmsgService.extractData(res)[0]; })
                      .catch(error => { return this.processHttpmsgService.handleError(error); });
    }
  
    getDishIds(): Observable<number[] | any> {
      return this.getDishes()
        .map(dishes => { return dishes.map(dish => dish.id) })
        .catch(error => { return error; } );
    }
   
} */