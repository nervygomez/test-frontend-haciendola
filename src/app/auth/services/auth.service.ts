import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environments } from '../../../environments/environments';
import { Router } from '@angular/router';
import { UserInterface } from '../../user/intefaces/user.inteface';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient, private router: Router) { }

    private baseUrl: string = environments.baseUrl;

    login(username: string, password: string): Observable<string> {
        return this.http.post<string>(`${this.baseUrl}/api/auth/login`, { userName: username, password })
            .pipe(
                tap( info => localStorage.setItem('token', info))
            );
    }

    registerUser(body: UserInterface): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/api/user`, body)
    }

    logOut() {
        localStorage.clear();
        this.router.navigate(['/auth']);
    }

}
