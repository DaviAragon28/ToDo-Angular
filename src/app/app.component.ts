import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks: string[] = []
  task: string = ''
  btnDisabled: boolean = false;
  newTask() {
    this.tasks.push(this.task)
    this.task = ''
  }

  removeTasks(index: number) {
    this.tasks.splice(index, 1)
  }

  done(index: number) {
    return index  
  }
  // btnDisabled() {
  //   if () {
      
  //   }
  // }
}
