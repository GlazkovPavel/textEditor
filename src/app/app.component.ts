import {AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  public value: string = '';
  public ed: string = '';
  public html: HTMLElement | undefined;
  constructor() {
  }
  edit() {
    const textArea = document.querySelector('.text')
    function color() {
      return 'rgb(' + (Math.round(Math.random() * 255)).toString(10) + ',' + (Math.round(Math.random() * 255)).toString(10) + ',' + (Math.round(Math.random() * 255)).toString(10) + ')';
    }
    const a = this.value
    const b = a.split('').map((val: string) => {
      if(val.length && val === '\n') {
        return val.replace(/\n/g, '<br/>')
      } else  {
       return val.replace(/./gi, `<span id="output" style="color: ${color()}" class="output" >$&</span>`)
      }
    })
  // @ts-ignore
    textArea?.innerHTML = b.join('')
  }

  ngAfterViewInit() {

    // function color() {
    //   return 'rgb(' + (Math.round(Math.random() * 255)).toString(10) + ',' + (Math.round(Math.random() * 255)).toString(10) + ',' + (Math.round(Math.random() * 255)).toString(10) + ')';
    // }
    //
    // const textArea = document.querySelector('.textarea')
    // const result = document.querySelector('.text')
    //
    // let current = 0
    //
    // textArea?.addEventListener('keyup', (e) => {
    //   // @ts-ignore
    //   const length = e.target?.value?.length;
    //   console.log(e);
    //
    //   if (current < length) {
    //     // @ts-ignore
    //     const value = e.key;
    //     const el = createElement(value === 'Enter' ? 'br' : 'span', value === 'Enter' ? '' : value);
    //     result?.append(el);
    //   } else {
    //     const lastElement = result?.lastChild;
    //     lastElement?.remove();
    //   }
    //
    //   current = length
    //
    // })
    //
    //
    // function createElement(elName: string, text = '') {
    //   const el = document.createElement(elName);
    //   if (text) {
    //     el.textContent = text
    //     el.style.color = color();
    //   }
    //
    //   return el;
    // }
  }


}
