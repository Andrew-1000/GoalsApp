import { EmitterVisitorContext } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input() goal!: Goal;
  
  @Output() isComplete:any = new EventEmitter<boolean>();
  @Output() isToBeDeleted:any = new EventEmitter<boolean>();

  goalComplete(complete:boolean) {
    this.isComplete.emit(complete);
  }

  deleteComplete(complete:boolean) {
    this.isToBeDeleted.emit(complete)
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}

