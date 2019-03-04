import { HttpClient, HttpHeaders } from '@Angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

const userUrl = 'https://cors-anywhere.herokuapp.com/https://warm-plains-86572.herokuapp.com';
const token = '';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) { }

    getUser(id: string) {                
        return this.http
        .get<User>(userUrl + "/users/user/" + id, { headers: { "x-access-token": token } })                ;
    }

    getUsers() {
        return this.http
            .get<User[]>(userUrl + '/users');
    }

    updateUser(user: User) {
        var url = `${userUrl}/users/user/${user._id}`;
        console.log(url);
        console.log(user);        
        return this.http.put(url , user, httpOptions);
    }

    addUser(user: User) {                
        const url = `${userUrl}/users`;                
        return this.http.post<User>(url, user, httpOptions);
    }


    deleteUser(user: User) {
        debugger
        const id = typeof user === 'number' ? user : user._id;
        console.log(user);
        const url = `${userUrl}/users/user/${id}`;        
        return this.http.delete<User>(url, httpOptions);
    }

}