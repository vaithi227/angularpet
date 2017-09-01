
import {NgModule} from '@angular/core';
import {ProgramService} from './program.service';
import {ProgramListComponent} from './program-list/program-list.component';
import {ProgramDetailComponent} from './program-detail/program-detail.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProgramAddComponent} from './program-add/program-add.component';
import {ProgramEditComponent} from './program-edit/program-edit.component';
import {ProgramsRoutingModule} from './programs-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProgramsRoutingModule
  ],
  declarations: [
    ProgramListComponent,
    ProgramDetailComponent,
    ProgramEditComponent,
    ProgramAddComponent
  ],
  providers: [ProgramService]

})

export class ProgramsModule {
}
