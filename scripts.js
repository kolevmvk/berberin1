/* script.js */

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'sr',
        selectable: true,
        headerToolbar: {
            start: 'title',
            center: '',
            end: 'prev,next today'
        },
        dateClick: function (info) {
            document.getElementById('selected-date').value = info.dateStr;
        }
    });
    calendar.render();
});
