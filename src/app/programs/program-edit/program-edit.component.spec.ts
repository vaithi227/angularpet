
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

import {ProgramEditComponent} from './program-edit.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ProgramService} from '../program.service';
import {Router, ActivatedRoute} from '@angular/router';
import {RouterStub, ActivatedRouteStub} from '../../testing/router-stubs';
import {Program} from '../program';

describe('ProgramEditComponent', () => {
  let component: ProgramEditComponent;
  let fixture: ComponentFixture<ProgramEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramEditComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      // schemas: [ NO_ERRORS_SCHEMA ],
      imports: [FormsModule, HttpModule, RouterTestingModule],
      providers: [
        ProgramService,
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
