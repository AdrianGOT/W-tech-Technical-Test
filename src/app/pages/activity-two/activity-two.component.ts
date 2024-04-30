import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnswerNotification, ControlNames, QuestionStructure } from '../../interfaces/pages/activity';

const EXPAND_ICONS = {
  collapse: 'horizontal_rule',
  expand: 'add'
}


@Component({
  selector: 'app-activity-two',
  templateUrl: './activity-two.component.html',
  styleUrl: './activity-two.component.scss'
})
export class ActivityTwoComponent  {

  constructor(private fb: FormBuilder ){}

  controlsName: ControlNames[] = ['questionOne' ,'questionTwo']

  isCheckQuestion: boolean = false;

  expandIcon: string = EXPAND_ICONS.collapse;

  totalScore: number = 0;

  questionContentClass: string = 'question__content ';

  form: FormGroup = this.fb.group({
    questionOne: ['', Validators.required],
    questionTwo: ['', Validators.required],
  })

  questions: QuestionStructure = {

    questionOne: {
      text: '¿Cuál es la diferencia fundamental entre un argumento deductivo y un argumento inductivo?',
      answerList: [
        'Los argumentos deductivos se basan en premisas que otorgan un grado de probabilidad a' +
        'la conclusión, mientras que los argumentos inductivos garantizan la verdad de la conclusión.',
        ' Los argumentos deductivos son siempre inválidos, mientras que los argumentos inductivos son siempre fuertes.',
        'La diferencia radica en que los argumentos deductivos no requieren premisas, mientras que los inductivos sí.',
        'Los argumentos deductivos aseguran que la verdad de las premisas conduce necesariamente a la verdad de la conclusión, mientras que los argumentos inductivos otorgan un grado de probabilidad a la conclusión.',
      ],
      correctAnswer: 3
    },
    questionTwo: {
      text: '¿Qué aspecto de los argumentos NO será evaluado en la prueba de comunicación escrita, según lo establecido en el texto?',
      answerList: [
        'La corrección de su presentación formal.',
        'La claridad de su expresión.',
        'La validez de los argumentos.',
        'La pertinencia de los argumentos para justificar el punto central del escrito'
      ],
      correctAnswer: 2

    }
  }

  notificationInfo: AnswerNotification = {
    questionOne: {
      isCorrect: false,
      correctAnswer: ''
    },
    questionTwo: {
      isCorrect: false,
      correctAnswer: ''
    },
  }


  toggleQuestion(): void{
    this.expandIcon = this.expandIcon === EXPAND_ICONS.collapse?
                      EXPAND_ICONS.expand
                      : EXPAND_ICONS.collapse


    if(this.questionContentClass.includes('expand')){
      this.questionContentClass = this.questionContentClass.replace('expand','');
    }else this.questionContentClass += 'expand';
  }

  onCheck(): void{
    this.isCheckQuestion = true;

    Object.entries(this.form.value).forEach(([key, value]) => {
      const controlName: ControlNames = key as unknown as ControlNames;
      const isCorrect = this.questions[controlName].correctAnswer === value;

      this.totalScore += isCorrect? 1 : 0;
      this.notificationInfo[controlName].isCorrect = isCorrect;
      this.notificationInfo[controlName].correctAnswer = this.getCorrectAnswer(controlName)
    })

  }

  private getCorrectAnswer(controlName: ControlNames): string {
    const abc = ['a','b','c','d'];
    const correctAnswerIndex = this.questions[controlName].correctAnswer;

    return `La respuesta correcta es la ${abc[correctAnswerIndex]}, ${this.questions[controlName].answerList[correctAnswerIndex]} `;
  }




}
