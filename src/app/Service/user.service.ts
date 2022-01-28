import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser!: Observable<User>;

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
    }

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(new User());
    const data=localStorage.getItem('currentUser');
    console.log(data);

    this.currentUser = this.currentUserSubject.asObservable();
  }

  register(user: User) {
    return this.http.post(`/local.user`, user);
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`/local.user`, { email, password }).pipe(
      map((user) => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    // this.currentUserSubject.next();
  }
}
