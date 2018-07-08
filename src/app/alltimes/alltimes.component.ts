import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
@Component({
  selector: 'at-alltimes',
  templateUrl: './alltimes.component.html',
  styleUrls: ['./alltimes.component.css']
})
export class AlltimesComponent implements OnInit {

  selectedRows : Array<any>;

  recordCount : number;
  
  contextMenu : MenuItem[];

  selectedRow : any;

  constructor() {
    for (let x = 0; x < 5; x++) {
      this.allTimesheetData = this.allTimesheetData.concat
      (this.allTimesheetData);
  }
  this.recordCount = this.allTimesheetData.length;
}


  ngOnInit() {
    this.contextMenu = [
      { label : 'Debug', icon: 'fa-bug', command: (event) => this.onDebug
      (this.selectedRows)},
      { label : 'Delete', icon: 'fa-close', command: (event) => this.onDelete
      (this.selectedRows)}
    ]
  }

  onDebug(selectedRows: any) {
    console.log(JSON.stringify(selectedRows));
  }

  onEditComplete(editInfo)
  {
    let fieldChanged = editInfo.column.field;
    let newRowValues = editInfo.data;
    alert("you edited ${fieldChanged} to ${newRowValues[fieldChanged]}");
  }

  onDelete(selectedRows: any) {
    this.allTimesheetData = this.allTimesheetData.filter((row)) => {
      return !selectedRows.includes(row);
    });
  }

  allTimesheetData = [
    { user: 'Junaid', project: 'Payroll App', category: 'Backend', startTime: 1000, endTime: 1700, date: 1434243 },
    { user: 'Todd', project: 'Agile Times', category: 'Frontend', startTime: 900, endTime: 1700, date: 1434243 },
    { user: 'Liam', project: 'Mobile App', category: 'Operations', startTime: 1100, endTime: 1700, date: 1434243 },
    { user: 'Nasser', project: 'Agile Times', category: 'Backend', startTime: 800, endTime: 1700, date: 1434243 },
  ];

  allProjectNames = ['', 'Desktop App', 'Mobile App', 'Web App'];


  allProjects = this.allProjectNames.map((proj) => {
    return {label: proj, value: proj}
  });

  onRowSelect(rowInfo) {
    alert(JSON.stringify(rowInfo.data));
  }

}