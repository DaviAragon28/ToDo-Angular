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
  done: boolean = false;

  newTask() {
    this.tasks.push(this.task)
    this.task = ''
  }

  removeTasks(index: number) {
    this.tasks.splice(index, 1)
  }

  doneBtn(index: number, item: string) {
    // const knowIndex = this.tasks.findIndex(item)
    // if (knowIndex === index) {
    //   console.log(index);
      this.done =! this.done
    // }
  }
}
