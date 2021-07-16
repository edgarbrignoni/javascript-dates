const eftSchedule = (loanDecision) => {
    let randomNumber = Math.floor(Math.random() * (27));
    contractDates = loanDecision.ONLINE_OFFERS[randomNumber].payment_schedule.payment.map((contractDate, index) => {
        let element = document.querySelector('#eft-schedule');
        let installmentRow = document.createElement('div');
        let paymentsNumber = document.createElement('div');
        let paymentsAmount = document.createElement('div');
        let contractColumn = document.createElement('div');
        let scheduleColumn = document.createElement('div');
        let addDatesColumn = document.createElement('button');
        let subDatesColumn = document.createElement('button');
        // instantiate payments column
        installmentRow.classList.add('row');
        paymentsNumber.setAttribute('class', 'col black box');
        paymentsNumber.setAttribute('id', 'paymentNumber' + index);
        paymentsNumber.innerHTML = index+1;
        installmentRow.appendChild(paymentsNumber);
        // instantiate payments column
        installmentRow.classList.add('row');
        paymentsAmount.setAttribute('class', 'col black box');
        paymentsAmount.setAttribute('id', 'paymentAmount' + index);
        paymentsAmount.innerHTML = '$' + contractDate.payment;
        installmentRow.appendChild(paymentsAmount);
        // instantiate contract column
        installmentRow.classList.add('row');
        contractColumn.setAttribute('class', 'col black box');
        contractColumn.setAttribute('id', 'contractDate' + index);
        contractColumn.innerHTML = getDayOfWeek(contractDate.paymentDate) + ', ' + dashToSlashDateString(contractDate.paymentDate);
        installmentRow.appendChild(contractColumn);
        // instantiate schedule column
        installmentRow.classList.add('row');
        scheduleColumn.setAttribute('class', 'col black box');
        scheduleColumn.setAttribute('id', 'scheduleDate' + index);
        scheduleColumn.innerHTML = getDayOfWeek(contractDate.paymentDate) + ', ' + dashToSlashDateString(contractDate.paymentDate);
        installmentRow.appendChild(scheduleColumn);
        // instantiate add column
        installmentRow.classList.add('row');
        addDatesColumn.setAttribute('class', 'col green box');
        addDatesColumn.setAttribute('id', 'addDate' + index);
        addDatesColumn.addEventListener('click', rowInstallment.bind(null, 'add', index));
        addDatesColumn.innerHTML = 'add' + index;
        installmentRow.appendChild(addDatesColumn);
        // instantiate sub column
        installmentRow.classList.add('row');
        subDatesColumn.setAttribute('class', 'col red box');
        subDatesColumn.setAttribute('id', 'subDate' + index);
        subDatesColumn.addEventListener('click', rowInstallment.bind(null, 'sub', index));
        subDatesColumn.innerHTML = 'sub' + index;
        installmentRow.appendChild(subDatesColumn);

        element.appendChild(installmentRow);
        return contractDate.paymentDate;
    });

    scheduleDates = [...contractDates];
    console.log('offer', randomNumber);
    console.log('contractDates', contractDates);
    console.log('scheduleDates', scheduleDates);
};
