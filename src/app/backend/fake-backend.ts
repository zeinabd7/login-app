import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor,HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of} from 'rxjs';

//not working, a little test without the real backenddddddd
const users = [{ login: 'test', password: 'test' }];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { body } = request;
        
        return ok();
       
        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function authenticate() {
            const { login, password } = body;
            const user = users.find(x => x.login === login && x.password === password);
            //if(!user) console.log({login,password});
            if (!user) return console.log('login or password is incorrect');
            return ok({
                login: user.login,
                password: user.password,
                token: 'fake-jwt-token'
            })
        }

        

      
       
    }
}
