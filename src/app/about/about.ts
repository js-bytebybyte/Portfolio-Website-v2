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

  // events: any[];

  // constructor() {
  //     this.events = [
  //         { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
  //         { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
  //         { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
  //         { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
  //     ];
  // }

}
