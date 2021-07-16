const columnInstallment = (btnPress) => {
    if (typeof(scheduleDates) !== 'undefined' && btnPress == 'add') {
        let mapped = scheduleDates.map((scheduleDates, index) => {
            scheduleDates = new Date(dashToSlashDateString(scheduleDates));
            scheduleDates.setDate(scheduleDates.getDate() + 1);
            document.querySelector('#scheduleDate'+index).innerHTML = getDayOfWeek(convertToDashDateObject(scheduleDates)) + ', ' + dashToSlashDateString(convertToDashDateObject(scheduleDates));
            return convertToDashDateObject(scheduleDates);
        });
        scheduleDates = [...mapped];
        console.log(scheduleDates);
    } else if (typeof(scheduleDates) !== 'undefined' && btnPress == 'sub') {
        let mapped = scheduleDates.map((scheduleDates, index) => {
            scheduleDates = new Date(dashToSlashDateString(scheduleDates));
            scheduleDates.setDate(scheduleDates.getDate() - 1);
            document.querySelector('#scheduleDate'+index).innerHTML = getDayOfWeek(convertToDashDateObject(scheduleDates)) + ', ' + dashToSlashDateString(convertToDashDateObject(scheduleDates));
            return convertToDashDateObject(scheduleDates);
        });
        scheduleDates = [...mapped];
        console.log(scheduleDates);
    } else {
        console.log('Click Go Lycos!');
        location.reload();
    }
}