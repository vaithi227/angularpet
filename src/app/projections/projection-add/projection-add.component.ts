
import {Component, OnInit} from '@angular/core';
import {ProjectionService} from '../projection.service';
import {Projection} from '../projection';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projection-add',
  templateUrl: './projection-add.component.html',
  styleUrls: ['./projection-add.component.css']
})
export class ProjectionAddComponent implements OnInit {

  projection: Projection;
  errorMessage: string;

  constructor(private projectionService: ProjectionService, private router: Router) {
    this.projection = <Projection>{};
  }

  ngOnInit() {
  }

  onSubmit(projection: Projection) {
    projection.id = null;
    this.projectionService.addProjection(projection).subscribe(
      new_projection => {
        this.projection = new_projection;
        this.gotoProjectionsList();
      },
      error => this.errorMessage = <any>error
    );
  }

  gotoProjectionsList() {
    this.router.navigate(['/projections']);
  }

}
