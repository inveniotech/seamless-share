import { Component, Input, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'ss-text-icon',
  standalone: true,
  template: `
    <div class="icon-container">
      <div class="circle" [ngStyle]="{ 'background-color': circleColor }">
        <span class="initials" [ngStyle]="{ color: textColor }">{{ initials }}</span>
      </div>
    </div>
  `,
  imports: [
    NgStyle
  ],
  styles: `
    .icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .circle {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 18px;
    }

    .initials {
      user-select: none; /* Prevent text selection */
    }
  `
})
export class TextIconComponent implements OnInit {
  @Input() name: string = '';

  initials: string = '';
  circleColor: string = '';
  textColor: string = '';

  ngOnInit(): void {
    this.initials = this.getInitials(this.name);
    this.circleColor = this.getRandomPastelColor();
    this.textColor = this.getDarkenedColor(this.circleColor, 0.5);
  }

  // Get initials from the name
  private getInitials(name: string): string {
    const names = name.split(' ');
    const initials = names.map(n => n[0].toUpperCase()).join('');
    return initials.substring(0, 2);
  }

  // Generate a random pastel color
  private getRandomPastelColor(): string {
    const r = Math.floor(Math.random() * 128 + 128);
    const g = Math.floor(Math.random() * 128 + 128);
    const b = Math.floor(Math.random() * 128 + 128);
    return `rgb(${r}, ${g}, ${b})`;
  }

  // Darken a color by a given factor
  private getDarkenedColor(color: string, factor: number): string {
    const rgb = color.match(/\d+/g)!.map(Number);
    const darkened = rgb.map(c => Math.floor(c * factor));
    return `rgb(${darkened[0]}, ${darkened[1]}, ${darkened[2]})`;
  }
}
