import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ConsultDataService {


  constructor(private http: HttpClient) { }

  /**
   * Devuelve el json almacenado con los datos en local
   * @returns
   */
  public getJSON(): Observable<any> {
        return this.http.get("../../assets/movies.json");
  }

  /**
   * Devuelve el json almacenado con los datos en local
   * @returns
   */
   public getLiteral(): Observable<any> {
    return this.http.get("../../assets/literal.json");
}
}
