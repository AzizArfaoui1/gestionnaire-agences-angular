import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
const url="http://localhost:3000/users";
const URL="http://localhost:3000/employe";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  personnes: any;


  constructor(private http: HttpClient) {}

getusers(): Observable<any[]> {
  return this.http.get<any[]>(url);
}
getemploye(): Observable<any[]> {
  return this.http.get<any[]>(URL);
}
getUser(username: string, password: string): Observable<any> {
  return this.http.get<any[]>(url).pipe(
    map((users) => users.find((user) => user.nom === username && user.password === password))
  );
}
getUserRole(username: string): Observable<string> {
  return this.http.get<any[]>(url).pipe(
    map((users) => {
      const user = users.find((u) => u.nom === username);
      return user?.role || 'user'; // Use optional chaining to handle null or undefined
    })
  );
}
createemploye(employe: any): Observable<any> {
  return this.http.post<any>(URL,employe);
}
deleteemployee(id: any) {
  return this.http.delete(`${URL}/${id}`);
}
getemployebyid(id: any){
  return this.http.get(`${URL}/${id}`);
}
updateemployedata(id:any,data:any){
  return this.http.put(`${URL}/${id}`,data);
}
}