import { Component } from '@angular/core';
import { CalendarComponentOptions, CalendarMonth, DayConfig } from 'ion2-calendar';
import { CalendarService } from 'ion2-calendar/dist/services/calendar.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // dateRange: { from: string; to: string; };
  type: 'string';
  date = new Date;
  month = {
    '0':'Янв',
    '1':'Фев',
    '2':'Мар',
    '3':'Апр',
    '4':'Май',
    '5':'Июн',
    '6':'Июл',
    '7':'Авг',
    '8':'Сен',
    '9':'Окт',
    '10':'Ноя',
    '11':'Дек',
  };
  
  // currentMonth = this.date.getMonth();
  currentMonth;
  _daysConfig: DayConfig[] = [];

  constructor() {
  
  }
  optionsRange: CalendarComponentOptions = {
    monthFormat: 'DD.MM.YYYY',
    weekdays: [
      'Вc',
      'Пy', 
      'Вт',
      'Ср',
      'Чn',
      'Пт',
      'Сб',
    ],
    monthPickerFormat: [    
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',

    ],
    weekStart: 1, 
  }


}
