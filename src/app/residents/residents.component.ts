import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { ResidentService } from '../resident.service';
import { Resident, ResponseResidents } from './resident.model';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent implements OnInit {

  form: FormGroup;

  editing: Resident;
  resident = {} as Resident;
  residents: Resident[];

  constructor(private formBuilder: FormBuilder, private service: ResidentService, private http: HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
    });
    this.getResidents();
  }

  onSubmit(): void { //form
    const newResident: ResponseResidents = {
      id: undefined,
      name: this.form.value.name,
      lastLoginDate: new Date(),
    } 

    this.service.saveResidents(newResident).subscribe((resident: Resident) => {
      this.form.reset();
      this.residents = [...this.residents, resident]
    })
  }

  showModalAddResidents(){
    document.querySelector('#modal-add-resident')?.classList.toggle('open');
  }

  getResidents() {
    this.service.getResidents().subscribe((residents: Resident[]) => {
      this.residents = residents;
    });
  }

  deleteResident(resident: Resident) {
    console.log("clicou");
    this.service.deleteResident(resident).subscribe(() => {
      this.getResidents();
    });
  }

  closeModal(){
    document.querySelector('#modal-add-resident')?.classList.remove('open');
  }

  showModalEdit(resident: Resident){
    this.editing = resident;
    document.querySelector('#modal-edit-resident')?.classList.toggle('open');
  }

  closeModalEdit(){
    console.log("ops");
    document.querySelector('#modal-edit-resident')?.classList.remove('open');
  }

  updateResident(){
    this.service.updateResident(this.editing).subscribe(() => {
      this.getResidents();
    });
    
  }


}
