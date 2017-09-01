

import {Component, OnInit} from '@angular/core';
import {ProgramService} from '../program.service';
import {Program} from '../program';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-program-edit',
  templateUrl: './program-edit.component.html',
  styleUrls: ['./program-edit.component.css']
})
export class ProgramEditComponent implements OnInit {
  public program;
  errorMessage: string;

  constructor(private programService: ProgramService, private route: ActivatedRoute, private router: Router) {
    this.program = <Program>{};
  }

  ngOnInit() {
    const programId = this.route.snapshot.params['id'];
    this.programService.getProgramById(programId).subscribe(
      program => this.program = program,
      error => this.errorMessage = <any> error);
  }

  onSubmit(program) {
    var that = this;
    this.programService.updateProgram(program.id.toString(), program).subscribe(
      get_result,
      get_error
    );

    function get_error(error) {
      console.log(error);
      console.log('error catched');
      return this.errorMessage = <any> error;
    }

    function get_result(update_status) {
      console.log(update_status);
      if (update_status.status === 204) {
        console.log('update success');
        that.gotoProgramDetail(program);
      } else {
        return console.log('update failed');
      }
    }
  };

  gotoProgramDetail(program: Program) {
    this.router.navigate(['/programs', program.id]);
  }



}
