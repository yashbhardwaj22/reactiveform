import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { RegisterServiceService } from '../register-service.service';
@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.css']
})
export class NewpageComponent implements OnInit {

  constructor(private router: Router) { }
  editform()
  {
    this.router.navigate(['/register']);
  }
  data:any;
  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('Data'))
  }

}