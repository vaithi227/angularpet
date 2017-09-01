
import {Component, OnInit} from '@angular/core';
import {ProjectionService} from '../projection.service';
import {Projection} from '../projection';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-projection-edit',
  templateUrl: './projection-edit.component.html',
  styleUrls: ['./projection-edit.component.css']
})
export class ProjectionEditComponent implements OnInit {
  public projection;
  errorMessage: string;

  constructor(private projectionService: ProjectionService, private route: ActivatedRoute, private router: Router) {
    this.projection = <Projection>{};
  }

  ngOnInit() {
    const projectionId = this.route.snapshot.params['id'];
    this.projectionService.getProjectionById(projectionId).subscribe(
      projection => this.projection = projection,
      error => this.errorMessage = <any> error);
  }

  onSubmit(projection) {
    var that = this;
    this.projectionService.updateProjection(projection.id.toString(), projection).subscribe(
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
        that.gotoProjectionDetail(projection);
      } else {
        return console.log('update failed');
      }
    }
  };

  gotoProjectionDetail(projection: Projection) {
    this.router.navigate(['/projections', projection.id]);
  }



}
