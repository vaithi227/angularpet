import {Component, OnInit} from '@angular/core';
import {ProjectionService} from '../projection.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Projection} from '../projection';
import 'rxjs/Rx';


@Component({
  selector: 'app-projection-detail',
  templateUrl: './projection-detail.component.html',
  styleUrls: ['./projection-detail.component.css']
})
export class ProjectionDetailComponent implements OnInit {
  errorMessage: string;
  projection: Projection;

  constructor(private route: ActivatedRoute, private router: Router, private projectionService: ProjectionService) {
    this.projection = <Projection>{};
  }

  ngOnInit() {
    const projectionId = this.route.snapshot.params['id'];
    this.projectionService.getProjectionById(projectionId).subscribe(
      projection => this.projection = projection,
      error => this.errorMessage = <any> error);
  }

  gotoProjectionsList() {
    this.router.navigate(['/projections']);
  }

  editProjection() {
    this.router.navigate(['/projections', this.projection.id, 'edit']);
  }

}
