import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-typing-animation',
  templateUrl: './typing-animation.component.html',
  styleUrls: ['./typing-animation.component.scss']
})
export class TypingAnimationComponent implements AfterViewInit {

  @ViewChild("textElement", { static: true }) textElement!: ElementRef;
  @ViewChild("blinkElement", { static: true }) blinkElement!: ElementRef;
  

  @Input() wordArray: string[] = [
    "Software Developer",
    "Data Storyteller",
    "Travel Blogger",
    "Baker"
  ];
  @Input() textColor = "#5e7dff";
  @Input() fontSize = "2.5em";
  @Input() blinkWidth = "2px";
  @Input() typingSpeedMilliseconds = 300;
  @Input() deleteSpeedMilliseconds = 300;

  private i = 0;

  ngAfterViewInit(): void {
    this.initVariables();
    this.typingEffect();
  }

  private initVariables(): void {
    this.textElement.nativeElement.style.color = this.textColor;
    this.textElement.nativeElement.style.fontSize = this.fontSize;
    this.textElement.nativeElement.style.padding = '0.1em';

    this.blinkElement.nativeElement.style.borderRightWidth = this.blinkWidth;
    this.blinkElement.nativeElement.style.borderRightColor = this.textColor;
    this.blinkElement.nativeElement.style.fontSize = this.fontSize;
  }

  private typingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopTyping = () => {
      if (word.length > 0) {
        this.textElement.nativeElement.innerHTML += word.shift();
      } else {
        this.deletingEffect();
        return;
      }
      setTimeout(loopTyping, this.typingSpeedMilliseconds);
    };
    loopTyping();
  }

  private deletingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        this.textElement.nativeElement.innerHTML = word.join("");
        setTimeout(loopDeleting, this.deleteSpeedMilliseconds);
      } else {
        if (this.wordArray.length > this.i + 1) {
          this.i++;
        } else {
          this.i = 0;
        }
        this.typingEffect();
        return;
      }
    };
    
    loopDeleting();
    
  }
}
