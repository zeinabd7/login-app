import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
//import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

const users = [{ login: 'test', password: 'test' }];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;
        
        return ok();

        // wrap in delayed observable to simulate server api call
        /*return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) 
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }*/

       
        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function authenticate() {
            const { login, password } = body;
            const user = users.find(x => x.login === login && x.password === password);
            if(!user) console.log({login,password});
            //if (!user) return error('login or password is incorrect');
            /*return ok({
                login: user.login,
                password: user.password,
                token: 'fake-jwt-token'
            })*/
        }

       /* function getUsers() {
            if (!isLoggedIn()) console.log("non");
            return ok(users);
        }*/

        // helper functions

        

        function error(message: string) {
            return throwError(() => ({ error: { message } }));
        }

      
       
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};