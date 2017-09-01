
/* tslint:disable:no-unused-variable */

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA} from '@angular/core';

import {ProjectionListComponent} from './projection-list.component';
import {FormsModule} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {ProjectionService} from '../projection.service';
import Spy = jasmine.Spy;
import {Projection} from '../projection';
import {HttpModule} from '@angular/http';
import {Observable} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {WelcomeComponent} from '../../parts/welcome/welcome.component';
import {PartsModule} from '../../parts/parts.module';
import {RouterStub, ActivatedRouteStub} from '../../testing/router-stubs';
import {ProjectionDetailComponent} from '../projection-detail/projection-detail.component';
import {ProjectionsModule} from '../projections.module';
import {DummyComponent} from '../../testing/dummy.component';
import {ProjectionAddComponent} from '../projection-add/projection-add.component';
import {ProjectionEditComponent} from '../projection-edit/projection-edit.component';


describe('ProjectionListComponent', () => {

  let component: ProjectionListComponent;
  let fixture: ComponentFixture<ProjectionListComponent>;
  let projectionService: ProjectionService;
  let spy: Spy;
  let de: DebugElement;
  let el: HTMLElement;


  const testProjection: Projection = {
    id: 1,
    projectionName: 'George',
    programName: 'Franklin'
  };
  let testProjections: Projection[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DummyComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [CommonModule, FormsModule, HttpModule, PartsModule, ProjectionsModule,
        RouterTestingModule.withRoutes(
          [{path: 'projections', component: ProjectionListComponent},
            {path: 'projections/add', component: ProjectionAddComponent},
            {path: 'projections/:id', component: ProjectionDetailComponent},
            {path: 'projections/:id/edit', component: ProjectionEditComponent}
          ])],
      providers: [
        ProjectionService,
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    testProjections = [{
      id: 1,
      projectionName: 'George',
      programName: 'Franklin'
    }];

    fixture = TestBed.createComponent(ProjectionListComponent);
    component = fixture.componentInstance;
    projectionService = fixture.debugElement.injector.get(ProjectionService);
    // component.projections = testProjections;
    spy = spyOn(projectionService, 'getProjections')
      .and.returnValue(Observable.of(testProjections));

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO  need fix - this part "routerLink="/projections/{{projection.id}}" routerLinkActive="active"" in html template cause test error
  // it('should call ngOnInit() method', () => {
  //   fixture.detectChanges();
  //   expect(spy.calls.any()).toBe(true, 'getProjections called');
  // });

  // TODO  need fix - this part "routerLink="/projections/{{projection.id}}" routerLinkActive="active"" in html template cause test error
  // it(' should show full name after getProjections observable (async) ', async(() => {
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => { // wait for async getProjections
  //     fixture.detectChanges();        // update view with name
  //     de = fixture.debugElement.query(By.css('.projectionFullName'));
  //     el = de.nativeElement;
  //     expect(el.innerText).toBe((testProjection.firstName.toString() + ' ' + testProjection.lastName.toString()));
  //   });
  // }));

});
