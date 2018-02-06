import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
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
export class PromotionService {

  constructor(private restangular: Restangular,
    private processHttpmsgService: ProcessHttpmsgService) { }

    
    getPromotions(): Observable<Promotion[]> {
      return this.restangular.all('promotions').getList();
    }
  
    getPromotion(id: number): Observable<Promotion> {
      return this.restangular.one('promotions', id).get();
    }
  
    getFeaturedPromotion(): Observable<Promotion[]> {
      return this.restangular.all('promotions').getList({featured: true});
    }
  }
 

  //--Promise

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

//--Observable
/* getPromotions(): Observable<Promotion[]> {
  return Observable.of(PROMOTIONS).delay(2000);
}

getPromotion(id: number): Observable<Promotion> {
  return Observable.of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).delay(2000);
}

getFeaturedPromotion(): Observable<Promotion> {
  return Observable.of(PROMOTIONS.filter((promo) => promo.featured)[0]).delay(2000);
}
} */