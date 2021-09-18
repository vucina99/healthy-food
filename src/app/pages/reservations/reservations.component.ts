import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../../shared/models/reservation';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  form!:FormGroup;

  constructor(private fb: FormBuilder) { }

  public people: any[] = [
    {
      id: 0,
      value: "Select number of"
    },
    {
      id: 1,
      value: "One"
    },
    {
      id: 2,
      value: "Two"
    },
    {
      id: 3,
      value: "Three"
    },
    {
      id: 4,
      value: "Four"
    },
    {
      id: 5,
      value: "Five"
    },
    {
      id: 6,
      value: "Six"
    },
    {
      id:7,
      value: "Seven"
    }
  ]

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control("",[Validators.required, Validators.pattern(/^[A-ZŠĐŽČĆ][a-zšđžčć]{1,30}(\s[A-ZŠĐŽČĆ][a-zšđžčć]{1,30})?$/)]),
      email: this.fb.control("",[Validators.required,Validators.email]),
      date: this.fb.control("",[Validators.required]),
      people: this.fb.control("0", [Validators.required, Validators.min(1)]),
    });
  }

   formData(){
    let formValue: Reservation = this.form.getRawValue();

    let dataOfReservation: Reservation = {
      name : formValue.name,
      email : formValue.email,
      date : formValue.date,
      people : formValue.people
    };

    return dataOfReservation;
  }


    onSubmit(){
      if(this.form.valid){
        let data = this.formData();
        console.log(data)
        alert('Reservation is made successfully');
        this.ngOnInit();
      }
      else{
        alert("Form is not valid! Please check again your inputs");
      }
      this.form.reset();
    }


}
