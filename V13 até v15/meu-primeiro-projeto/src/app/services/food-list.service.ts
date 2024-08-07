import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

// module interface
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter

  private list: Array<string> = [
    "X-Bacon",
    "Feijão",
    "Ovo"
  ];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  private url: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  /*public foofList(){
    return this.list;
  }*/

  public foofList(): Observable<Array<FoodList>>{
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    ); 
  }

  /*public foodListAdd(value: string){
    this.foodListAlert(value)
    this.list.push(value)
  }*/

  public foodListAdd(value: string): Observable<FoodList>{
    return this.http.post<FoodList>(`${this.url}list-food`, {nome: value}).pipe(
      res => res,
      error => error
    )
  };

  public foodListEdit(value: string, id: number): Observable<FoodList>{
    return this.http.put<FoodList>(`${this.url}list-food/${id}`, {nome: value}, this.httpOptions).pipe(
      res => res,
      error => error
    )
  };

  public foodListDelete(id: number): Observable<FoodList>{
    return this.http.delete<FoodList>(`${this.url}list-food$/${id}`).pipe(
      res => res,
      error => error
    )
  };

  /* public foodListAlert(value: string) {
    return this.emitEvent.emit(value)
  } */

  public foodListAlert(value: FoodList) {
    return this.emitEvent.emit(value)
  }
}
