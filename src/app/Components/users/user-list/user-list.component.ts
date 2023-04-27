import { Component } from '@angular/core';
import { UserModel } from 'src/app/models';
import { UsersService } from 'src/app/services/users.service';
import { HttpEvent, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: UserModel[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalPages: number;

  constructor(private userService: UsersService){}

  ngOnInit(): void{
    this.loadUsers();
  }
  

  loadUsers(){
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.userService.getUsers().subscribe(users => {
      this.totalPages = Math.ceil(users.length / this.itemsPerPage);
      this.users = users.slice(startIndex, endIndex);
    }
      
    )
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadUsers();
    }
  }
  banUser(id: number) {
    this.userService.banUser(id).subscribe(() => {
      this.loadUsers();
    });
  }
  /*
      <td>
        <button (click)="banUser(user.id)">Ban</button>
      </td>
  */

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers();
    }
  }
}

