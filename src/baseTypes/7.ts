/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  MN = "monday",
  TUE = "tuesday",
  WD = "wednesday",
  THR = "thursday",
  FR = "friday",
  ST = "saturday",
  SUN = "sunday"
}


function isWeekend(day: string):boolean{
if(day=== Day.ST || day=== Day.SUN){
  return true
}
return false
}