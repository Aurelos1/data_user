import { Component } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data: any[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      }
    );
  }
  title = 'data_user';

  downloadJson() {
    const fileName = "users.json";
    const json = JSON.stringify(this.users);
    const blob = new Blob([json], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }
  
}
