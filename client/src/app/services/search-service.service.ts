import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Review } from '../models/Review';
import { Comments } from '../models/Comments';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  searched: any;
  
  constructor(private http: HttpClient) { }
  
  getRevList(search: string): Promise<Review[]> {
    let params = new HttpParams()
      .set('search', search)
    // send for springboot
    return firstValueFrom(
      this.http.get<Review[]>("/api/search", { params })
    )
  }
  
  postComment(title:string, name:string, rating:number, comment:string) {
    let body = new HttpParams()
            .set("title", title)
            .set("name", name)
            .set("rating", rating)
            .set("comment", comment)

    return firstValueFrom(
      this.http.post("/api/comment", body.toString(), 
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' 
      }
    })
    )
  }
  
}
