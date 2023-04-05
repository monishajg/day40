import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpringbootApiService {

  SPRINGB_URL = '';

  constructor(private http: HttpClient) { }
  
  getRandomNumber(): Promise<any> {
    let params = new HttpParams()
    
    return lastValueFrom(
      this.http.get<any>(this.SPRINGB_URL, { params })
    )
  }
  
}
