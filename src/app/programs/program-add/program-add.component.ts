/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */

/**
 * @author Vitaliy Fedoriv
 */

import {Component, OnInit} from '@angular/core';
import {ProgramService} from '../program.service';
import {Program} from '../program';
import {Router} from '@angular/router';

@Component({
  selector: 'app-program-add',
  templateUrl: './program-add.component.html',
  styleUrls: ['./program-add.component.css']
})
export class ProgramAddComponent implements OnInit {

  program: Program;
  errorMessage: string;

  constructor(private programService: ProgramService, private router: Router) {
    this.program = <Program>{};
  }

  ngOnInit() {
  }

  onSubmit(program: Program) {
    program.id = null;
    this.programService.addProgram(program).subscribe(
      new_program => {
        this.program = new_program;
        this.gotoProgramsList();
      },
      error => this.errorMessage = <any>error
    );
  }

  gotoProgramsList() {
    this.router.navigate(['/programs']);
  }

}
