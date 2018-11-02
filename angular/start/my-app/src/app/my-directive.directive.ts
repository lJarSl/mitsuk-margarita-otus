import { Directive } from '@angular/core';

@Directive({
  selector: '[appWakaWaka]'
})
export class MyDirectiveDirective {

  constructor() {
      console.log('waka-waka')
      return true
   }

}
