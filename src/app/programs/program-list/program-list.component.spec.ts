

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA} from '@angular/core';

import {ProgramListComponent} from './program-list.component';
import {FormsModule} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {ProgramService} from '../program.service';
import Spy = jasmine.Spy;
import {Program} from '../program';
import {HttpModule} from '@angular/http';
import {Observable} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {WelcomeComponent} from '../../parts/welcome/welcome.component';
import {PartsModule} from '../../parts/parts.module';
import {RouterStub, ActivatedRouteStub} from '../../testing/router-stubs';
import {ProgramDetailComponent} from '../program-detail/program-detail.component';
import {ProgramsModule} from '../programs.module';
import {DummyComponent} from '../../testing/dummy.component';
import {ProgramAddComponent} from '../program-add/program-add.component';
import {ProgramEditComponent} from '../program-edit/program-edit.component';


describe('ProgramListComponent', () => {

  let component: ProgramListComponent;
  let fixture: ComponentFixture<ProgramListComponent>;
  let programService: ProgramService;
  let spy: Spy;
  let de: DebugElement;
  let el: HTMLElement;


  const testProgram: Program = {
    id: 1,
    firstName: 'George',
    lastName: 'Franklin',
    address: '110 W. Liberty St.',
    city: 'Madison',
    telephone: '6085551023',
    pets: null
  };
  let testPrograms: Program[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DummyComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [CommonModule, FormsModule, HttpModule, PartsModule, ProgramsModule,
        RouterTestingModule.withRoutes(
          [{path: 'programs', component: ProgramListComponent},
            {path: 'programs/add', component: ProgramAddComponent},
            {path: 'programs/:id', component: ProgramDetailComponent},
            {path: 'programs/:id/edit', component: ProgramEditComponent}
          ])],
      providers: [
        ProgramService,
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    testPrograms = [{
      id: 1,
      firstName: 'George',
      lastName: 'Franklin',
      address: '110 W. Liberty St.',
      city: 'Madison',
      telephone: '6085551023',
      pets: [{
        id: 1,
        name: 'Leo',
        birthDate: '2010-09-07',
        type: {id: 1, name: 'cat'},
        program: null,
        visits: null
      }]
    }];

    fixture = TestBed.createComponent(ProgramListComponent);
    component = fixture.componentInstance;
    programService = fixture.debugElement.injector.get(ProgramService);
    // component.programs = testPrograms;
    spy = spyOn(programService, 'getPrograms')
      .and.returnValue(Observable.of(testPrograms));

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO  need fix - this part "routerLink="/programs/{{program.id}}" routerLinkActive="active"" in html template cause test error
  // it('should call ngOnInit() method', () => {
  //   fixture.detectChanges();
  //   expect(spy.calls.any()).toBe(true, 'getPrograms called');
  // });

  // TODO  need fix - this part "routerLink="/programs/{{program.id}}" routerLinkActive="active"" in html template cause test error
  // it(' should show full name after getPrograms observable (async) ', async(() => {
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => { // wait for async getPrograms
  //     fixture.detectChanges();        // update view with name
  //     de = fixture.debugElement.query(By.css('.programFullName'));
  //     el = de.nativeElement;
  //     expect(el.innerText).toBe((testProgram.firstName.toString() + ' ' + testProgram.lastName.toString()));
  //   });
  // }));

});
