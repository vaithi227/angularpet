
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Projection} from './projection';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class ProjectionService {

  private entity_url = environment.REST_API_URL + 'projections';

  constructor(private _http: Http) {
  }

  getProjections(): Observable<Projection[]> {
    return this._http.get(this.entity_url)
      .map((response: Response) => <Projection[]> response.json())
      .catch(this.handleError);
  }

  getProjectionById(projection_id: string): Observable<Projection> {
    return this._http.get((this.entity_url + '/' + projection_id))
      .map((response: Response) => <Projection> response.json())
      .catch(this.handleError);
  }

  addProjection(projection: Projection): Observable<Projection> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this._http.post(this.entity_url, JSON.stringify(projection), {headers})
      .map((response: Response) => <Projection> response.json())
      .catch(this.handleError);
  }

  updateProjection(projection_id: string, projection: Projection): Observable<Projection> {
    const body = JSON.stringify(projection);
    const headers = new Headers({'Content-Type': ' application/json;charset=UTF-8'});
    const options = new RequestOptions({headers: headers});
    return this._http.put((this.entity_url + '/' + projection_id), body, options)
      .map((response: Response) => response)
      .catch(this.handleError); // TODO parse response header when error ?
  }

  deleteProjection(projection_id: string): Observable<Projection> {
    return this._http.delete((this.entity_url + '/' + projection_id))
      .map((response: Response) => <Projection> response.json())
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
