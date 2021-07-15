const eftSchedule = (loanDecision) => {
    let randomNumber = Math.floor(Math.random() * (27));
    contractDates = loanDecision.decisionResponse.ONLINE_OFFERS[randomNumber].payment_schedule.payment.map((contractDate, index) => {

        let loanScheduleDisplay = document.querySelector('#loanScheduleDisplay');
        let underfold = document.querySelector('#underfold');

        if (index == 0) {
            
            let paymentRow = document.createElement('div');
            paymentRow.setAttribute('id', 'payment' + index);
            paymentRow.setAttribute('class', 'grid-wrap');
            loanScheduleDisplay.appendChild(paymentRow);
            
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
            // block
            let paymentNumber = document.createElement('div');
            paymentNumber.setAttribute('class', 'payment-number');
            paymentNumber.innerHTML = index+1;
            paymentRow.appendChild(paymentNumber);

            let paymentAmount = document.createElement('div');
            paymentAmount.setAttribute('id', 'paymentAmount'+index);
            paymentAmount.setAttribute('class', 'payment-amount');
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
            desktopAddImg.setAttribute('src', '{% asset_path plus_circle_blue.svg %}');
            adjustDays.appendChild(desktopAddImg);

            loanScheduleDisplay.appendChild(paymentRow);

            let displayAll = document.createElement('div');
            displayAll.setAttribute('id', 'displayAll');
            displayAll.setAttribute('class', 'display-payment-options');
            displayAll.innerHTML = 'Show All Scheduled Payments';

            loanScheduleDisplay.appendChild(displayAll);

            let underfold = document.createElement('div');
            underfold.setAttribute('id', 'underfold');
            loanScheduleDisplay.appendChild(underfold);

        } else {

            let paymentRow = document.createElement('div');
            paymentRow.setAttribute('id', 'payment' + index);
            paymentRow.setAttribute('class', 'grid-wrap');
            underfold.appendChild(paymentRow);

            let paymentNumberInfo = document.createElement('div');
            paymentNumberInfo.setAttribute('class', 'payment-number-info mobile');
            paymentNumberInfo.innerHTML = 'Payment<br />Number';
            paymentRow.appendChild(paymentNumberInfo);

            let paymentAmountInfo = document.createElement('div');
            paymentAmountInfo.setAttribute('class', 'payment-amount-info mobile');
            paymentAmountInfo.innerHTML = 'Payment<br />Amount';
            paymentRow.appendChild(paymentAmountInfo);

            let contractDueDate = document.createElement('div');
            contractDueDate.setAttribute('class', 'contractual-due-date-info mobile');
            contractDueDate.innerHTML = 'Contractual<br />Due Date';
            paymentRow.appendChild(contractDueDate);
            // block
            let eftDateInfo = document.createElement('div');
            eftDateInfo.setAttribute('class', 'eft-date-info mobile');
            paymentRow.appendChild(eftDateInfo);
            
            let eftAdjustDate = document.createElement('span');
            eftAdjustDate.setAttribute('class', 'eft-adjust-date');
            eftAdjustDate.innerHTML = 'EFT <br class="desktop" />Date*';
            eftDateInfo.appendChild(eftAdjustDate);
            
            let eftAdjustImages = document.createElement('span');
            eftAdjustImages.setAttribute('class', 'eft-adjust-images');
            eftDateInfo.appendChild(eftAdjustImages);
            
            let addImg = document.createElement('img');
            addImg.setAttribute('class', '');
            addImg.setAttribute('alt', 'Add');
            addImg.setAttribute('src', '{% asset_path plus_circle_blue.svg %}');
            eftAdjustImages.appendChild(addImg);
            
            let breakLine = document.createElement('br');
            addImg.appendChild(breakLine);
            
            let subImg = document.createElement('img');
            subImg.setAttribute('class', '');
            subImg.setAttribute('alt', 'Subtract');
            subImg.setAttribute('src', '{% asset_path minus_circle_blue.svg %}');
            eftAdjustImages.appendChild(subImg);
            // end-block
            // block
            let paymentNumber = document.createElement('div');
            paymentNumber.setAttribute('class', 'payment-number');
            paymentNumber.innerHTML = index+1;
            paymentRow.appendChild(paymentNumber);

            let paymentAmount = document.createElement('div');
            paymentAmount.setAttribute('id', 'paymentAmount'+index);
            paymentAmount.setAttribute('class', 'payment-amount');
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
            // currentEftDate.setAttribute('disabled', '');
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
            // end-block
            // block
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
            desktopAddImg.setAttribute('src', '{% asset_path plus_circle_blue.svg %}');
            adjustDays.appendChild(desktopAddImg);
            // end-block
            underfold.appendChild(paymentRow);

        }
        
        return contractDate.paymentDate;
    });

    let showAll = document.createElement('div');
    showAll.setAttribute('id', 'showAll');
    showAll.setAttribute('class', 'display-payment-options');
    showAll.innerHTML = 'Show Fewer Scheduled Payments';
    underfold.appendChild(showAll);

    scheduleDates = [...contractDates];
    console.log('offer', randomNumber);
    console.log('contractDates', contractDates);
    console.log('scheduleDates', scheduleDates);
};
