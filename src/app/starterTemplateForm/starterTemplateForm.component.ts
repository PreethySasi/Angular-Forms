import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'starter-template-form',
    templateUrl: './starterTemplateForm.component.html'
})
export class StarterTemplateFormComponent implements OnInit {
    farmDetails: any;
    message: string;
    options: string[];

    myDatePickerOptions = {
        todayBtnTxt: 'Today',
        dateFormat: 'yyyy-mm-dd',
        firstDayOfWeek: 'su',
        sunHighlight: true,
        height: '34px',
        width: '300px',
        inline: false ,
        disableUntil: {year: 2016, month: 1, day: 1},
        disableSince: {year: 2019, month: 12, day: 31}
    };

    public model: any = { date: { year: 2018, month: 10, day: 9 } };
    constructor() { }

    ngOnInit() {
        this.farmDetails = {
            herdNumber: 'a123456',
            firstName: 'Test Farmer',
            county: 'Cavan'
        };
        this.options = ['Yes', 'No'];
    }
    onDateChanged(event: any) {
        console.log('onDateChanged(): ',
            event.date,
            ' - formatted: ', event.formatted,
            ' - epoc timestamp: ', event.epoc,
            ' - selected week start: ', event.start,
            ' - selected week end: ', event.end);
    }
    onSubmit() {
        this.message = 'You typed: ' + this.farmDetails.firstName;
    }

}