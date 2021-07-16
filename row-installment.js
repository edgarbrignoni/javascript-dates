let frequency = 'Monthly';

const rowInstallment = (btnPress, index) => {
    noAddOverlap = (stringToDate(scheduleDates[index+1]) != undefined) ? (stringToDate(scheduleDates[index]).getTime() + 1000 * 3600 * 24 < stringToDate(scheduleDates[index+1])) : false;
    noSubOverlap = (stringToDate(scheduleDates[index-1]) != undefined) ? (stringToDate(scheduleDates[index]).getTime() - 1000 * 3600 * 24 > stringToDate(scheduleDates[index-1])) : false;
    diffInDays = dateDiff(scheduleDates[index], contractDates[index]);
    scheduleDates[index] = new Date(dashToSlashDateString(scheduleDates[index]));
    let limit = frequency == 'Monthly' ? 15 : 6;
    if (diffInDays < limit && btnPress == 'add') {
        if (index < Object.keys(scheduleDates).length - 1 && noAddOverlap) {
            scheduleDates[index].setDate(scheduleDates[index].getDate() + 1);
        } else if (index == Object.keys(scheduleDates).length - 1) {
            scheduleDates[index].setDate(scheduleDates[index].getDate() + 1);
        }
    }
    if (diffInDays > -limit && btnPress == 'sub') {
        if (index > 0 && noSubOverlap) {
            scheduleDates[index].setDate(scheduleDates[index].getDate() - 1);
        } else if (index == 0) {
            scheduleDates[index].setDate(scheduleDates[index].getDate() - 1);
        }
    }
    console.log(btnPress+index, contractDates[index], dateDiff(convertToDashDateObject(scheduleDates[index]), contractDates[index]), convertToDashDateObject(scheduleDates[index]));
    scheduleDates[index] = convertToDashDateObject(scheduleDates[index]);
    document.querySelector('#scheduleDate'+index).innerHTML = getDayOfWeek(scheduleDates[index]) + ', ' + dashToSlashDateString(scheduleDates[index]);
};