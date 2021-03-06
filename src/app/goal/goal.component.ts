import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[] | any = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', 'Andrew', new Date(2020, 3, 14)),
    new Goal(2, 'Buy Cookies','I have to buy cookies for the parrot', 'Alex', new Date(2021, 4, 23)),
    new Goal(3, 'Get new Phone','Diana has her birthday coming up soon', 'Benjamin', new Date(2021, 5, 20)),
    new Goal(4, 'Get Dog Food','Pupper likes expensive sancks', 'Bosmman', new Date(2021, 7, 26)),
    new Goal(5, 'Solve math homework','Damn Math', 'Charles', new Date(2021, 9, 9)),
    new Goal(6, 'Plot my world domination plan','Cause I am an evil overlord','Christopher', new Date(2021, 12, 25)),
  ] ;

  alertService: AlertService | any;

  

  toggleDetails(index: any | any) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete: any, index: number) {
    if (isComplete) {
      let toComplete = confirm(`Are you sure you want to mark ${this.goals[index].name} as complete?`)
      if(toComplete){
        this.goals.splice(index, 1);
        this.alertService.alertMessage("Goal has been completed");
      }
      
    }
  }
  deleteGoal(isToBeDeleted: any, index: number) {
    if(isToBeDeleted) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      if(toDelete) {
        this.goals.splice(index, 1);
        this.alertService.alertMessage("This goal has been deleted");

      }
    }
  }

  addNewGoal(goal: Goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  constructor(
    // goalService: GoalService
    ) {

    // this.goals  = goalService.getGoals()
   }

  ngOnInit(): void {
  }

}
