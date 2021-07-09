import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Region{
  name: string;
  id: string;
  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  form : FormGroup;
  regions: Region[] = [
    {name: 'ภาคกลาง',id:'C'},
    {name: 'ภาคเหนือ',id:'N'},
    {name: 'ภาคตะวันออกเฉียงเหนือ',id:'NE',},
    {name: 'ภาคตะวันออก',id:'E'},
    {name: 'ภาคใต้',id:'S',},
    {name: 'ภาคตะวันตก',id:'W'},
  ];
  regionsControl = new FormControl(this.regions[0]);

  constructor(){
    this.form  = new FormGroup({
      region: this.regionsControl
    })
  }

  
}
