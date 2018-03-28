import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'at-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectForm: FormGroup;
  minProjectDate = new Date();

  allDevs = [
    {label: 'Junaid', value: 'J Cool'},
    {label: 'John', value: 'John Cool'},
    {label: 'Tom', value: 'T Cool'},
    {label: 'Chris', value: 'C Cool'},
    {label: 'Peter', value: 'P Cool'},
    {label: 'Jake', value: 'Jake Cool'},
    {label: 'Mark', value: 'Mark Cool'},
    {label: 'Bill', value: 'B Cool'},
  ]

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.projectForm = this.fb.group({
      projectId: ['', [Validators.required, Validators.minLength(5)]],
      description: ['My cool project', [Validators.required,
      Validators.maxLength(140)]],
      startDate: [new Date(), Validators.required],
      projectType: ['B'],
      selectedDevs: [''],
      rating: [3]
    })
  }

  hasFormErrors() {
    return !this.projectForm.valid;
  }

  onSubmit() {
    alert(JSON.stringify(this.projectForm.value));
  }
}
