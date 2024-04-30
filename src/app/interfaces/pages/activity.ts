export type ControlNames = 'questionOne' | 'questionTwo';

export interface Question {
  text         : string,
  answerList   : string[],
  correctAnswer: number
}

export type QuestionStructure = {
  [text in ControlNames]: Question;
};

export interface Notification{
  isCorrect: boolean,
  correctAnswer: string
}

export type AnswerNotification = {
  [text in ControlNames] : Notification
}
