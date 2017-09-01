

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ProgramsModule} from './programs/programs.module';
import {ProjectionsModule} from './projections/projections.module';
import {OwnersModule} from './owners/owners.module';
import {PetsModule} from './pets/pets.module';
import {VisitsModule} from './visits/visits.module';
import {PetTypesModule} from './pettypes/pettypes.module';
import {VetsModule} from './vets/vets.module';
import {PartsModule} from './parts/parts.module';
import {SpecialiesModule} from './specialties/specialies.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { Md2Module } from 'md2';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProgramsModule,
    ProjectionsModule,
    OwnersModule,
    PetsModule,
    VisitsModule,
    PetTypesModule,
    VetsModule,
    SpecialiesModule,
    PartsModule,
    Md2Module,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
