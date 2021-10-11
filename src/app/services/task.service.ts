import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-Version': '1.0'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://localhost:44326/TaskList';

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    console.log(this.http.get<Task[]>(this.apiUrl));
    return this.http.get<Task[]>(this.apiUrl, httpOptions);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url, httpOptions);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.patch<Task>(url, task, httpOptions).pipe();
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions).pipe();
  }
}
