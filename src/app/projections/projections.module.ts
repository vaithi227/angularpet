
import {NgModule} from '@angular/core';
import {ProjectionService} from './projection.service';
import {ProjectionListComponent} from './projection-list/projection-list.component';
import {ProjectionDetailComponent} from './projection-detail/projection-detail.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProjectionAddComponent} from './projection-add/projection-add.component';
import {ProjectionEditComponent} from './projection-edit/projection-edit.component';
import {ProjectionsRoutingModule} from './projections-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectionsRoutingModule
  ],
  declarations: [
    ProjectionListComponent,
    ProjectionDetailComponent,
    ProjectionEditComponent,
    ProjectionAddComponent
  ],
  providers: [ProjectionService]

})

export class ProjectionsModule {
}
