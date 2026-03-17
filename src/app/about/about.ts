import { Component } from '@angular/core';
import { ABOUT_TEXT } from '../constants';
import { EXPERIENCE } from '../constants';

import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TabsModule, TabList } from 'primeng/tabs';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-about',
  imports: [CommonModule, 
    ButtonModule, 
    TabList, 
    TabsModule,
    TimelineModule,
    CardModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  paragraphs = ABOUT_TEXT;

  events = EXPERIENCE;

  // function to download the cv - pdf
  downloadCv(): void {
    
    // create anchor element
    const link = document.createElement('a');
    // point to PDF in the folder
    link.href = '/Jolande-Steenput-CV-Resume-20260317.pdf';
    link.download = 'Jolande-Steenput-CV-Resume-20260317.pdf';
    link.target = '_blank';
    link.rel = 'noopener';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
