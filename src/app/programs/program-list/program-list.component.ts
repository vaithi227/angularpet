

import {Component, OnInit} from '@angular/core';
import {ProgramService} from '../program.service';
import {Program} from '../program';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit {
  errorMessage: string;
  programs: Program[];

  constructor(private router: Router, private programService: ProgramService) {
  }

  ngOnInit() {
    this.programService.getPrograms().subscribe(
      programs => this.programs = programs,
      error => this.errorMessage = <any> error);
  }

  onSelect(program: Program) {
    this.router.navigate(['/programs', program.id]);
  }
  
   onDelete(program) {
    var that = this;
    this.programService.deleteProgram(program.id.toString()).subscribe(
      get_result,
      get_error
    );

    function get_error(error) {
      console.log(error);
      console.log('error catched');
      return this.errorMessage = <any> error;
    }
   function get_result() {
        that.gotoProgramsList();
    }
  };

 gotoProgramsList() {
    this.router.navigate(['/programs']);
  }

  addProgram() {
    this.router.navigate(['/programs/add']);
  }

}
