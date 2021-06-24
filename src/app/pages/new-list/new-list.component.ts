import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() { }

  createNewList(title: string) {
    this.taskService.createNewList(title).subscribe((list: List) => {
      console.log(list);
      this.router.navigate(['/lists', list._id]);
    });
  }
}
