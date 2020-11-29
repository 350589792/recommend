(function($) {
    "use strict";
    /*-------------------------------------
             Calender initiate 
     -------------------------------------*/
    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('fc-calendar');
        var calendarElSm = document.getElementById('fc-calendar-sm');

        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            initialDate: '2020-08-07',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            },
            editable: true,
            events: [{
                    title: 'Buy Design Assets',
                    start: '2020-08-01T21:09:00',
                    classNames: ['event1']
                },
                {
                    title: 'Interview-Backend Engineer',
                    start: '2020-08-06',
                    color: '#2cc034'
                },
                {
                    title: 'Meeting with Mr. David',
                    start: '2020-08-15',
                    color: '#f40e4f'
                },
                {
                    title: 'Conference Meeting',
                    start: '2020-08-18',
                    color: '#00cccc'
                },
                {
                    title: 'New Event of Today',
                    start: '2020-08-23',
                    color: '#9b0ef4'
                },
                {
                    title: 'Meetup Conference',
                    start: '2020-08-28',
                    color: '#f4800e'
                },
                {
                    title: '6ty Socrates Birthday',
                    start: '2020-08-31',
                    color: '#2cc034'
                }
            ]
        });
        var calendarSm = new FullCalendar.Calendar(calendarElSm, {
            initialView: 'dayGridMonth',
            initialDate: '2020-09-07',
            headerToolbar: {
                left: 'title',
                right: 'prev,next'
            },
            fixedWeekCount: false,
        });

        calendar.render();
        calendarSm.render();
    });

})(jQuery);