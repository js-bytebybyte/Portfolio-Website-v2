import { Component } from '@angular/core';
import { ABOUT_TEXT } from '../constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  paragraphs = ABOUT_TEXT;
}
