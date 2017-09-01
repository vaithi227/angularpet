
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectionDetailComponent} from './projection-detail/projection-detail.component';
import {ProjectionListComponent} from './projection-list/projection-list.component';
import {ProjectionEditComponent} from './projection-edit/projection-edit.component';
import {ProjectionAddComponent} from './projection-add/projection-add.component';


const projectionRoutes: Routes = [
  {path: 'projections', component: ProjectionListComponent},
  {path: 'projections/add', component: ProjectionAddComponent},
  {path: 'projections/:id', component: ProjectionDetailComponent},
  {path: 'projections/:id/edit', component: ProjectionEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(projectionRoutes)],
  exports: [RouterModule]
})

export class ProjectionsRoutingModule {
}
