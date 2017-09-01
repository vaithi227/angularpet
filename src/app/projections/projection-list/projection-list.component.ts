import {Component, OnInit} from '@angular/core';
import {ProjectionService} from '../projection.service';
import {Projection} from '../projection';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projection-list',
  templateUrl: './projection-list.component.html',
  styleUrls: ['./projection-list.component.css']
})
export class ProjectionListComponent implements OnInit {
  errorMessage: string;
  projections: Projection[];

  constructor(private router: Router, private projectionService: ProjectionService) {
  }

  ngOnInit() {
    this.projectionService.getProjections().subscribe(
      projections => this.projections = projections,
      error => this.errorMessage = <any> error);
  }

  onSelect(projection: Projection) {
    this.router.navigate(['/projections', projection.id]);
  }

    onDelete(projection) {
    var that = this;
    this.projectionService.deleteProjection(projection.id.toString()).subscribe(
      get_result,
      get_error
    );

    function get_error(error) {
      console.log(error);
      console.log('error catched');
      return this.errorMessage = <any> error;
    }
   function get_result() {
        that.gotoProjectionsList();
    }
  };

 gotoProjectionsList() {
    this.router.navigate(['/projections']);
  }

  addProjection() {
    this.router.navigate(['/projections/add']);
  }

}
