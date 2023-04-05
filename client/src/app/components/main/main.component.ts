import { Component } from '@angular/core';
import { SpringbootApiService } from 'src/app/services/springboot-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  constructor(private springSvc: SpringbootApiService) {  }
  
  trigger() {
    this.springSvc.getRandomNumber().then(
    randomName => console.log(randomName)
    )
  }
  
}
