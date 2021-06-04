import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwthUser, AuthUser } from '../user/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static loginUrl = (apiUrl: string) => `${apiUrl}/auth/local`;

  private currentUserSubject: BehaviorSubject<JwthUser>;
  private currentUser: Observable<JwthUser>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<JwthUser>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): JwthUser {
    return this.currentUserSubject.value;
  }

  login(authUser: AuthUser) {
    const url = AuthService.loginUrl(environment.apiUrl);
    return this.http.post<JwthUser>(url, authUser).subscribe(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      if (user.jwt) {
        this.router.navigate(['/admin']);
      }
    })
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(<JwthUser>{});
    this.router.navigate(['/login']);
  }
}
