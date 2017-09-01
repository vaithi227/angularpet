
/* tslint:disable:no-unused-variable */

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

import {ProjectionEditComponent} from './projection-edit.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ProjectionService} from '../projection.service';
import {Router, ActivatedRoute} from '@angular/router';
import {RouterStub, ActivatedRouteStub} from '../../testing/router-stubs';
import {Projection} from '../projection';

describe('ProjectionEditComponent', () => {
  let component: ProjectionEditComponent;
  let fixture: ComponentFixture<ProjectionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectionEditComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      // schemas: [ NO_ERRORS_SCHEMA ],
      imports: [FormsModule, HttpModule, RouterTestingModule],
      providers: [
        ProjectionService,
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
