const columnInstallment = (btnPress) => {
    if (typeof(scheduleDates) !== 'undefined') {
        let didItReachLimit = reachLimit(btnPress, scheduleDates, contractDates);
        if (didItReachLimit !== true && btnPress == 'add') {
            let mapped = scheduleDates.map((scheduleDates, index) => {
                scheduleDates = new Date(dashToSlashDateString(scheduleDates));
                scheduleDates.setDate(scheduleDates.getDate() + 1);
                document.querySelector('#scheduleDate'+index).innerHTML = getDayOfWeek(convertToDashDateObject(scheduleDates)) + ', ' + dashToSlashDateString(convertToDashDateObject(scheduleDates));
                return convertToDashDateObject(scheduleDates);
            });
            scheduleDates = [...mapped];
            console.log(scheduleDates);
        } else if (didItReachLimit !== true && btnPress == 'sub') {
            let mapped = scheduleDates.map((scheduleDates, index) => {
                scheduleDates = new Date(dashToSlashDateString(scheduleDates));
                scheduleDates.setDate(scheduleDates.getDate() - 1);
                document.querySelector('#scheduleDate'+index).innerHTML = getDayOfWeek(convertToDashDateObject(scheduleDates)) + ', ' + dashToSlashDateString(convertToDashDateObject(scheduleDates));
                return convertToDashDateObject(scheduleDates);
            });
            scheduleDates = [...mapped];
            console.log(scheduleDates);
        } 
    } else {
        console.log('Click Go Lycos!');
        location.reload();
    }
}

const reachLimit = (btnPress, scheduleDates, contractDates) => {
    let limit = frequency == 'Monthly' ? 15 : 6;
    for (let index=0; index < scheduleDates.length; index++) {
        diffInDays = dateDiff(scheduleDates[index], contractDates[index]);
        if (diffInDays == limit && btnPress == 'add') {
            console.log('position', index, 'reach upper limit of', diffInDays);
            return true;
        } else if (diffInDays == -limit && btnPress == 'sub') {
            console.log('position', index, 'reach lower limit of', diffInDays);
            return true; 
        }
    }
    return false;
}