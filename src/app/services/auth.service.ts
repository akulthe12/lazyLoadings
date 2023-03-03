import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { faGlassMartiniAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) {

   }
   setToken(token:string):string | void{
    localStorage.setItem('token',token);
   }
   getToken():string|null
   {
return localStorage.getItem('token')
   }
   isLoggedIn()
   {
    return this.getToken()!=null;
   }
   logout()
   {
    localStorage.removeItem('token');
    this.router.navigate(['login']);

   }
   login({email,password}:any): Observable<any>
   {
    if(email==='archana@gmail.com'&&password==='archana123')
    {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({name:'Archana Kulthe',email:'archana@gmail.com'});
    }
       return throwError(new Error('Failed to login'));
    }
   }

