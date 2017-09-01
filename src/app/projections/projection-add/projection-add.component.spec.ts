
/* tslint:disable:no-unused-variable */



import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {ProjectionAddComponent} from './projection-add.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Router} from '@angular/router';
import {ProjectionService} from '../projection.service';
import {HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterStub} from '../../testing/router-stubs';

describe('ProjectionAddComponent', () => {
  let component: ProjectionAddComponent;
  let fixture: ComponentFixture<ProjectionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectionAddComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, HttpModule, RouterTestingModule],
      providers: [
        ProjectionService,
        {provide: Router, useClass: RouterStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
