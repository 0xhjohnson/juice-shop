import { environment } from '../../environments/environment'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private hostServer = environment.hostServer
  private host = this.hostServer + '/api/Products'

  constructor (private http: HttpClient) { }

  search (criteria: any) {
    return this.http.get(this.hostServer + '/rest/products/search?q=' + criteria).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }

  find (params: any) {
    return this.http.get(this.host + '/', { params: params }).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }

  get (id: number) {
    return this.http.get(this.host + '/' + id + '?d=' + encodeURIComponent(new Date().toDateString())).pipe(map((response: any) =>
    response.data), catchError((err) => { throw err }))
  }

}