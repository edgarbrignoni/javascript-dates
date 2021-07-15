const eftSchedule = (loanDecision) => {
    let randomNumber = Math.floor(Math.random() * (27));
    contractDates = loanDecision.decisionResponse.ONLINE_OFFERS[randomNumber].payment_schedule.payment.map((contractDate, index) => {
        if (index == 0) {
            let element = document.querySelector('#loanScheduleDisplay');
            
            let paymentRow = document.createElement('div');
            paymentRow.setAttribute('id', 'payment' + index);
            paymentRow.setAttribute('class', 'grid-wrap');
            element.appendChild(paymentRow);
            
            let paymentNumberInfo = document.createElement('div');
            paymentNumberInfo.setAttribute('class', 'payment-number-info');
            paymentNumberInfo.innerHTML = 'Payment<br />Number';
            paymentRow.appendChild(paymentNumberInfo);
            
            let paymentAmountInfo = document.createElement('div');
            paymentAmountInfo.setAttribute('class', 'payment-amount-info');
            paymentAmountInfo.innerHTML = 'Payment<br />Amount';
            paymentRow.appendChild(paymentAmountInfo);
            
            let contractDueDate = document.createElement('div');
            contractDueDate.setAttribute('class', 'contractual-due-date-info');
            contractDueDate.innerHTML = 'Contractual<br />Due Date';
            paymentRow.appendChild(contractDueDate);
            
            let eftDateInfo = document.createElement('div');
            eftDateInfo.setAttribute('class', 'eft-date-info');
            paymentRow.appendChild(eftDateInfo);
            
            let eftAdjustDate = document.createElement('span');
            eftAdjustDate.setAttribute('class', 'eft-adjust-date');
            eftAdjustDate.innerHTML = 'EFT <br class="desktop" />Date*';
            eftDateInfo.appendChild(eftAdjustDate);
            
            let eftAdjustImages = document.createElement('span');
            eftAdjustImages.setAttribute('class', 'eft-adjust-images');
            eftDateInfo.appendChild(eftAdjustImages);
            
            let addImg = document.createElement('img');
            addImg.setAttribute('id', 'desktopAddDayAll');
            addImg.setAttribute('class', 'hover');
            addImg.setAttribute('alt', 'Add');
            addImg.setAttribute('src', '{% asset_path plus_circle_blue.svg %}');
            eftAdjustImages.appendChild(addImg);
            
            let breakLine = document.createElement('br');
            addImg.appendChild(breakLine);
            
            let subImg = document.createElement('img');
            subImg.setAttribute('id', 'desktopSubtractDayAll');
            subImg.setAttribute('class', 'hover');
            subImg.setAttribute('alt', 'Subtract');
            subImg.setAttribute('src', '{% asset_path minus_circle_blue.svg %}');
            eftAdjustImages.appendChild(subImg);
            
            let eftAdjustText = document.createElement('span');
            eftAdjustText.setAttribute('class', 'eft-adjust-text');
            eftAdjustText.innerHTML = '(Add 1 Day To All Dates)<br />(Subtract 1 From All Dates)';
            eftAdjustImages.appendChild(eftAdjustText);
            
            let adjustDaysInfo = document.createElement('div');
            adjustDaysInfo.setAttribute('class', 'adjust-days-info');
            paymentRow.appendChild(adjustDaysInfo);
            
            let mobile = document.createElement('span');
            mobile.setAttribute('class', 'mobile');
            adjustDaysInfo.appendChild(mobile);
            
            let half = document.createElement('div');
            half.setAttribute('class', 'half');
            mobile.appendChild(half);
            
            let mobileSubtractDayAll = document.createElement('img');
            mobileSubtractDayAll.setAttribute('id', 'mobileSubtractDayAll');
            mobileSubtractDayAll.setAttribute('class', 'hover');
            mobileSubtractDayAll.setAttribute('alt', 'Subtract');
            mobileSubtractDayAll.setAttribute('src', '{% asset_path minus_circle_blue.svg %}');
            mobileSubtractDayAll.innerHTML = '<br />Subtract 1 Day<br />From All Dates';
            half.appendChild(mobileSubtractDayAll);
            
            let mobileAddOneDayAll = document.createElement('img');
            mobileAddOneDayAll.setAttribute('id', 'mobileSubtractDayAll');
            mobileAddOneDayAll.setAttribute('class', 'hover');
            mobileAddOneDayAll.setAttribute('alt', 'Add');
            mobileAddOneDayAll.setAttribute('src', '{% asset_path plus_circle_blue.svg %}');
            mobileAddOneDayAll.innerHTML = '<br />Add 1 Day <br />To All Dates';
            half.appendChild(mobileAddOneDayAll);
            
            let desktop = document.createElement('span');
            desktop.setAttribute('class', 'desktop');
            desktop.innerHTML = 'Add or Subtract<br />a Day';
            adjustDaysInfo.appendChild(desktop);

            let paymentNumber = document.createElement('div');
            paymentNumber.setAttribute('class', 'payment-number');
            paymentNumber.innerHTML = index+1;
            paymentRow.appendChild(paymentNumber);

            let paymentAmount = document.createElement('div');
            paymentAmount.setAttribute('id', 'paymentAmount');
            paymentAmount.setAttribute('class', 'payment-amount');
            paymentAmount.innerHTML = index+1;
            paymentRow.appendChild(paymentAmount);

            let contractualDueDate = document.createElement('div');
            contractualDueDate.setAttribute('id', 'contractualDueDate'+index);
            contractualDueDate.setAttribute('class', 'contractual-due-date');
            paymentRow.appendChild(contractualDueDate);

            let eftDate = document.createElement('div');
            eftDate.setAttribute('class', 'eft-date');
            paymentRow.appendChild(eftDate);

            let eftDayName = document.createElement('span');
            eftDayName.setAttribute('id', 'EFTDay'+index);
            eftDayName.setAttribute('class', 'eft-day-name');
            eftDate.appendChild(eftDayName);

            let currentEftDate = document.createElement('input');
            currentEftDate.setAttribute('id', 'EFTDate'+index);
            currentEftDate.setAttribute('type', 'text');
            currentEftDate.setAttribute('name', 'EFT Date'+index);
            currentEftDate.setAttribute('value', '');
            currentEftDate.setAttribute('disabled', '');
            currentEftDate.setAttribute('class', 'current-eft-date');
            eftDate.appendChild(currentEftDate);

            let addHalfMobile = document.createElement('div');
            addHalfMobile.setAttribute('class', 'half mobile');
            eftDate.appendChild(addHalfMobile);
            
            let addHalfMobileImg = document.createElement('img');
            addHalfMobileImg.setAttribute('id', 'mobileAddOneDay'+index);
            addHalfMobileImg.setAttribute('class', 'add-one-mobile');
            addHalfMobileImg.setAttribute('alt', 'Add');
            addHalfMobileImg.setAttribute('src', '{% asset_path plus_circle_blue.svg %}');
            addHalfMobileImg.innerHTML = 'A Day';
            addHalfMobile.appendChild(addHalfMobileImg);
            
            let subHalfMobile = document.createElement('div');
            subHalfMobile.setAttribute('class', 'half mobile');
            eftDate.appendChild(subHalfMobile);
            
            let subHalfMobileImg = document.createElement('img');
            subHalfMobileImg.setAttribute('id', 'mobileSubtractOneDay'+index);
            subHalfMobileImg.setAttribute('class', 'subtract-one-mobile');
            subHalfMobileImg.setAttribute('alt', 'Sub');
            subHalfMobileImg.setAttribute('src', '{% asset_path minus_circle_blue.svg %}');
            subHalfMobileImg.innerHTML = 'A Day';
            subHalfMobile.appendChild(subHalfMobileImg);

            let adjustDays = document.createElement('div');
            adjustDays.setAttribute('class', 'adjust-days');
            paymentRow.appendChild(adjustDays);

            let desktopSubtractImg = document.createElement('img');
            desktopSubtractImg.setAttribute('id', 'desktopSubtractOneDay'+index);
            desktopSubtractImg.setAttribute('class', 'hover subtract-one-day');
            desktopSubtractImg.setAttribute('alt', 'Subtract');
            desktopSubtractImg.setAttribute('src', '{% asset_path minus_circle_blue.svg %}');
            adjustDays.appendChild(desktopSubtractImg);

            let desktopAddImg = document.createElement('img');
            desktopAddImg.setAttribute('id', 'desktopAddOneDay'+index);
            desktopAddImg.setAttribute('class', 'hover add-one-day');
            desktopAddImg.setAttribute('alt', 'Add');
            desktopAddImg.setAttribute('src', '{% asset_path minus_circle_blue.svg %}');
            adjustDays.appendChild(desktopAddImg);

            element.appendChild(paymentRow);

            let displayAll = document.createElement('div');
            displayAll.setAttribute('id', 'displayAll');
            displayAll.setAttribute('class', 'display-payment-options');
            displayAll.innerHTML = 'Show All Scheduled Payments';

            element.appendChild(displayAll);
        }
        console.log(contractDate);
        // let element = document.querySelector('#loanScheduleDisplay');
        // let installmentRow = document.createElement('div');
        // let paymentsNumber = document.createElement('div');
        // let paymentsAmount = document.createElement('div');
        // let contractColumn = document.createElement('div');
        // let scheduleColumn = document.createElement('div');
        // let addDatesColumn = document.createElement('button');
        // let subDatesColumn = document.createElement('button');
        // // instantiate payments column
        // installmentRow.classList.add('row');
        // paymentsNumber.setAttribute('class', 'col black box');
        // paymentsNumber.setAttribute('id', 'paymentNumber' + index);
        // paymentsNumber.innerHTML = index+1;
        // installmentRow.appendChild(paymentsNumber);
        // // instantiate payments column
        // installmentRow.classList.add('row');
        // paymentsAmount.setAttribute('class', 'col black box');
        // paymentsAmount.setAttribute('id', 'paymentAmount' + index);
        // paymentsAmount.innerHTML = '$' + contractDate.payment;
        // installmentRow.appendChild(paymentsAmount);
        // // instantiate contract column
        // installmentRow.classList.add('row');
        // contractColumn.setAttribute('class', 'col black box');
        // contractColumn.setAttribute('id', 'contractDate' + index);
        // contractColumn.innerHTML = getDayOfWeek(contractDate.paymentDate) + ', ' + dashToSlashDateString(contractDate.paymentDate);
        // installmentRow.appendChild(contractColumn);
        // // instantiate schedule column
        // installmentRow.classList.add('row');
        // scheduleColumn.setAttribute('class', 'col black box');
        // scheduleColumn.setAttribute('id', 'scheduleDate' + index);
        // scheduleColumn.innerHTML = getDayOfWeek(contractDate.paymentDate) + ', ' + dashToSlashDateString(contractDate.paymentDate);
        // installmentRow.appendChild(scheduleColumn);
        // // instantiate add column
        // installmentRow.classList.add('row');
        // addDatesColumn.setAttribute('class', 'col green box');
        // addDatesColumn.setAttribute('id', 'addDate' + index);
        // addDatesColumn.addEventListener('click', rowInstallment.bind(null, 'add', index));
        // addDatesColumn.innerHTML = 'add' + index;
        // installmentRow.appendChild(addDatesColumn);
        // // instantiate sub column
        // installmentRow.classList.add('row');
        // subDatesColumn.setAttribute('class', 'col red box');
        // subDatesColumn.setAttribute('id', 'subDate' + index);
        // subDatesColumn.addEventListener('click', rowInstallment.bind(null, 'sub', index));
        // subDatesColumn.innerHTML = 'sub' + index;
        // installmentRow.appendChild(subDatesColumn);

        // element.appendChild(installmentRow);
        // return contractDate.paymentDate;
    });

    // scheduleDates = [...contractDates];
    // console.log('offer', randomNumber);
    // console.log('contractDates', contractDates);
    // console.log('scheduleDates', scheduleDates);
};
