import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Respones } from '../model/respones.model';
import { SendRequest } from '../model/sendRequest.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherforecastService {
  serverUrl = environment.url;

  constructor(private http: HttpClient) { }

  getWeatherRegion(request:SendRequest){
    return new Promise<Respones>((ok, notok) => {
      this.http.post<Respones>(`${this.serverUrl}/Data`, request, {}).subscribe(res => {
        // console.log(res); 
        ok(res);
        
      },error => {
        notok(error)
      })
    })
  }
}
