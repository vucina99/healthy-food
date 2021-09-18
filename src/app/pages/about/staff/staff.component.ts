import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../../shared/services/staff.service';
import { Staff } from '../../../shared/models/staff';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private service: StaffService) { }

  public staff: Staff[];
  ngOnInit(): void {
    this.getAllStaff();
  }

  getAllStaff(){
    this.service.getAllStaff().subscribe(data => {
      this.staff = data;
    })
  }

}
