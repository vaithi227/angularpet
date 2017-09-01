

/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {ProjectionService} from './projection.service';
import {environment} from 'environments/environment';
import {HttpModule} from '@angular/http';

describe('ProjectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ProjectionService]
    });
  });

  it('should ...', inject([ProjectionService], (service: ProjectionService) => {
    expect(service).toBeTruthy();
  }));
});
