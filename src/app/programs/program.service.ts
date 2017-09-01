
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Program} from './program';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class ProgramService {

  private entity_url = environment.REST_API_URL + 'programs';

  constructor(private _http: Http) {
  }

  getPrograms(): Observable<Program[]> {
    return this._http.get(this.entity_url)
      .map((response: Response) => <Program[]> response.json())
      .catch(this.handleError);
  }

  getProgramById(program_id: string): Observable<Program> {
    return this._http.get((this.entity_url + '/' + program_id))
      .map((response: Response) => <Program> response.json())
      .catch(this.handleError);
  }

  addProgram(program: Program): Observable<Program> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this._http.post(this.entity_url, JSON.stringify(program), {headers})
      .map((response: Response) => <Program> response.json())
      .catch(this.handleError);
  }

  updateProgram(program_id: string, program: Program): Observable<Program> {
    const body = JSON.stringify(program);
    const headers = new Headers({'Content-Type': ' application/json;charset=UTF-8'});
    const options = new RequestOptions({headers: headers});
    return this._http.put((this.entity_url + '/' + program_id), body, options)
      .map((response: Response) => response)
      .catch(this.handleError); // TODO parse response header when error ?
  }

  deleteProgram(program_id: string): Observable<Program> {
    return this._http.delete((this.entity_url + '/' + program_id))
      .map((response: Response) => <Program> response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.log('handleError log: ');
    let errMsg: string;
    if (error instanceof Response) {
      if (!(error.text() === '' )) {  // if response body not empty
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        console.log('binding errors header not empty');
        errMsg = error.headers.get('errors').toString();
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
