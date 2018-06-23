import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'at-alltimes',
  templateUrl: './alltimes.component.html',
  styleUrls: ['./alltimes.component.css']
})
export class AlltimesComponent implements OnInit {

  constructor() {
  }


  ngOnInit() {

  }

  allTimesheetData = [

    { user: 'Junaid', project: 'Payroll App', category: 'Backend', startTime: 1000, endTime: 1700, date: 1434243 },
    { user: 'Todd', project: 'Agile Times', category: 'Frontend', startTime: 900, endTime: 1700, date: 1434243 },
    { user: 'Liam', project: 'Mobile App', category: 'Operations', startTime: 1100, endTime: 1700, date: 1434243 },
    { user: 'Nasser', project: 'Agile Times', category: 'Backend', startTime: 800, endTime: 1700, date: 1434243 },

  ];

}
