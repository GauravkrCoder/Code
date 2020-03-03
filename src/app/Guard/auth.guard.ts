import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CrudService } from '../Services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private ser: CrudService,private route:Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return true;    
    //return this.ser.isLogin;    
    if(this.ser.isLogin){
      return true;
    }
    else{
      alert('login please');
      this.route.navigate(['login']);
    }
  }
}

