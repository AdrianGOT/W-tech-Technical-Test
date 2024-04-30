import { Component, Input, OnInit } from '@angular/core';
import { Notification } from '../../interfaces/pages/activity';

const CHECK_ICONS = {
  correct: 'check',
  fail: 'close'
}

const CHECK_TEXT = {
  correct: 'Bien hecho',
  fail: 'Respuesta incorrecta'
}

const CHECK_CLASS = {
  correct : 'correct',
  fail    : 'fail',
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit {
  @Input() information: Notification | undefined;

  checkIcon: string = '';
  checkText: string = '';
  checkClass: string = '';


  ngOnInit(): void {
    const isCorrect = this.information?.isCorrect;
    this.checkIcon = isCorrect? CHECK_ICONS.correct  : CHECK_ICONS.fail;
    this.checkText = isCorrect? CHECK_TEXT.correct   : CHECK_TEXT.fail;
    this.checkClass = isCorrect? CHECK_CLASS.correct : CHECK_CLASS.fail;
  }
}
