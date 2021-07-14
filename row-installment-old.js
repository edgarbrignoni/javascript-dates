// let contractDates = [new Date('02/13/2021'),new Date('03/13/2021'),new Date('04/13/2021')]
// let revisedDates = [new Date('02/13/2021'),new Date('03/13/2021'),new Date('04/13/2021')]
let contractDates = [new Date('05/01/2021'), new Date('06/01/2021'), new Date('07/01/2021')];
let revisedDates = [new Date('05/01/2021'), new Date('06/01/2021'), new Date('07/01/2021')];
// let contractDates = [new Date('2021-02-13T00:00:00.000-05:00'), new Date('2021-03-13T00:00:00.000-05:00'), new Date('2021-04-13T00:00:00.000-05:00')]
// let revisedDates = [new Date('2021-02-13T00:00:00.000-05:00'), new Date('2021-03-13T00:00:00.000-05:00'), new Date('2021-04-13T00:00:00.000-05:00')]
let frequency = 'Monthly';

const rowInstallment = (btnPress, index) => {
    scheduleDates[index] = new Date(dashToSlashDateString(scheduleDates[index]));
    if (btnPress == 'add') {
        scheduleDates[index].setDate(scheduleDates[index].getDate()+1);
    } else if (btnPress == 'sub') {
        scheduleDates[index].setDate(scheduleDates[index].getDate()-1);
    }
    scheduleDates[index] = convertToDashDateObject(scheduleDates[index]);
    calcDiff = dateDiff(scheduleDates[index], contractDates[index]);
    console.log(btnPress+index, scheduleDates[index], calcDiff, contractDates[index]);
    document.querySelector('#scheduleDate'+index).innerHTML =  scheduleDates[index];
    return
    let diffInDays = Math.round((revisedDates[i].getTime() - contractDates[i].getTime()) / (1000 * 3600 * 24));
    limit = frequency == 'Monthly' ? 15 : 6;
    if (diffInDays < limit && btnPress == 'add') {
        if (i < Object.keys(revisedDates).length - 1 && revisedDates[i].getTime() + 1000 * 3600 * 24 < revisedDates[i + 1].getTime()) {
            revisedDates[i].setDate(revisedDates[i].getDate() + 1);
        } else if (i == Object.keys(revisedDates).length - 1) {
            revisedDates[i].setDate(revisedDates[i].getDate() + 1);
        }
        // console.log(btnPress, i, 'length', Object.keys(revisedDates).length, revisedDates[i])
        // return revisedDates
    }
    if (diffInDays > -limit && btnPress == 'sub') {
        if (i > 0 && revisedDates[i].getTime() - 1000 * 3600 * 24 > revisedDates[i - 1].getTime()) {
            revisedDates[i].setDate(revisedDates[i].getDate() - 1);
        } else if (i == 0) {
            revisedDates[i].setDate(revisedDates[i].getDate() - 1);
        }
        // console.log(btnPress, i, 'length', Object.keys(revisedDates).length, revisedDates[i])
        // return revisedDates
    }
    console.log(btnPress, i, diffInDays, revisedDates[i]);
    return revisedDates;
};

// const dateCompare = (d1, d2) => {
//     const date1 = new Date(d1);
//     const date2 = new Date(d2);

//     if (date1 > date2) {
//         console.log(`${d1} is greater than ${d2}`);
//     } else if (date1 < date2) {
//         console.log(`${d2} is greater than ${d1}`);
//     } else {
//         console.log(`Both dates are equal`);
//     }
// };

// dateCompare("1/01/2022", "1/01/2021")
// dateCompare("01/01/2021", "01/01/2021")

const dateDiff = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    const datediff = date1 - date2;
    return datediff / (1000 * 3600 * 24);
};

const dashToSlashDateString = (string) => {
    let arr = string.split('-');
    return `${arr[1]}/${arr[2]}/${arr[0]}`;
};

const slashToDashDateString = (string) => {
    let arr = string.split('/');
    return `${arr[2]}-${arr[0]}-${arr[1]}`;
};

const convertToDashDateObject = (obj) => {
    return obj.toLocaleDateString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
};

const convertToSlashDateObject = (obj) => {
    return obj.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};