import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
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
export class LeaderService {

  constructor(private restangular: Restangular,
    private processHttpmsgService: ProcessHttpmsgService) { }

    getLeaders(): Observable<Leader[]> {
      return this.restangular.all('leaders').getList();
    }
  
    getLeader(id: number): Observable<Leader> {
      return this.restangular.one('leaders',id).get();
    }
  
    getFeaturedLeader(): Observable<Leader[]> {
      return this.restangular.all('leaders').getList({featured: true}).map(leaders => leaders[0]);
    }
  
    getLeaderIds(): Observable<number[]> {
      return this.getLeaders().map(leaders => { 
        return(leaders.map(leader => leader.id) as number[]);
      });         
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

//--Observable
  /* getLeaders(): Observable<Leader[]> {
    return  Observable.of(LEADERS).delay(2000);
  }

  getLeader(id: number): Observable<Leader> {
    return Observable.of(LEADERS.filter((leader) => (leader.id === id))[0]).delay(2000);
  }

  getFeaturedLeader(): Observable<Leader> {
    return Observable.of(LEADERS.filter((leader) => leader.featured)[0]).delay(2000);
  } */