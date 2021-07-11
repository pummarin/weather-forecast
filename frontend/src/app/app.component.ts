import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Respones } from './model/respones.model';
import { SendRequest } from './model/sendRequest.model';
import { WeatherforecastService } from './service/weatherforecast.service';

interface Region {
  name: string;
  id: string;

}
interface Condition {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  request: SendRequest = new SendRequest();
  respones: Respones = {
    WeatherForecasts: []
  };
  form: FormGroup;
  regions: Region[] = [
    { name: 'ภาคกลาง', id: 'C' },
    { name: 'ภาคเหนือ', id: 'N' },
    { name: 'ภาคตะวันออกเฉียงเหนือ', id: 'NE', },
    { name: 'ภาคตะวันออก', id: 'E' },
    { name: 'ภาคใต้', id: 'S', },
    { name: 'ภาคตะวันตก', id: 'W' },
  ];
  isLoad: boolean = false;

  condition: Condition[] = [
    {id:  1 ,name: 'ท้องฟ้าแจ่มใส(Clear)'},
    {id:  2 ,name: 'มีเมฆบางส่วน(Partly cloudy)'},
    {id:  3 ,name: 'เมฆเป็นส่วนมาก(Cloudy)'},
    {id:  4 ,name: 'มีเมฆมาก(Overcast)'},
    {id:  5 ,name: 'ฝนตกเล็กน้อย(Light rain)'},
    {id:  6 ,name: 'ฝนปานกลาง(Moderate rain)'},
    {id:  7 ,name: 'ฝนตกหนัก(Heavy rain)'},
    {id:  8 ,name: 'ฝนฟ้าคะนอง(Thunderstorm)'},
    {id:  9 ,name: 'อากาศหนาวจัด(Very cold)'},
    {id:  10,name: 'อากาศหนาว(Cold)'},
    {id:  11,name: 'อากาศเย็น(Cool)'},
    {id:  12,name: 'อากาศร้อนจัด(Very hot)'}
  ];
  
  
  constructor(private weatherforecastservice: WeatherforecastService) {
    this.form = new FormGroup({
      region: new FormControl(this.regions[0])
    })
  }

  ngOnInit() {
    this.test();
  }

  getCondition(condition:number){
    return this.condition.find(e => e.id == condition).name;
  }

  getDate(date:string){
    let d : Date = new Date(date);
    return d.toLocaleDateString('Th-th',{timeZone:'UTC'});
  }
  test() {
    this.isLoad = true;
    console.log(this.form.controls.region.value.id);
    this.request.region = this.form.controls.region.value.id;
    this.weatherforecastservice.getWeatherRegion(this.request).then(res => {
      // console.log("get from backend:", res);
      this.respones = res;
      // console.log(this.respones);
      this.isLoad = false;

    })
  }



}
