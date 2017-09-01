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

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProgramDetailComponent} from './program-detail/program-detail.component';
import {ProgramListComponent} from './program-list/program-list.component';
import {ProgramEditComponent} from './program-edit/program-edit.component';
import {ProgramAddComponent} from './program-add/program-add.component';


const programRoutes: Routes = [
  {path: 'programs', component: ProgramListComponent},
  {path: 'programs/add', component: ProgramAddComponent},
  {path: 'programs/:id', component: ProgramDetailComponent},
  {path: 'programs/:id/edit', component: ProgramEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(programRoutes)],
  exports: [RouterModule]
})

export class ProgramsRoutingModule {
}
