const loanDecision = () => {
    let apiUrl = 'https://devx-24.io';
    let url = `${apiUrl}/api/loan-decision`;
    let request = {
        APP_LENDER_ID: '4',
        APP_SOURCE: 'SFL',
        APP_MILITARY_INDICATOR: 'N',
        APP_STORE_BRANCH: 'DE1998',
        APP_PROMO_CD: null,
        APP_PRODUCT_TYPE: 'SL',
        APP_FIRST_NAME: 'EDGAR',
        APP_MIDDLE_NAME: '',
        APP_LAST_NAME: 'TEST',
        APP_DOB: '01/02/1973',
        APP_SSN: '555555555',
        APP_ADDRESS_1: 'OL-ALL-M',
        APP_ADDRESS_2: null,
        APP_CITY: 'CITY',
        APP_STATE: 'DE',
        APP_ZIP: '19702',
        APP_ID_NUM: '123456789',
        APP_LICENSE_NUMBER: '123456789',
        APP_LICENSE_TYPE: 'DL',
        APP_TIME_AT_ADDRESS: '120',
        APP_HOUSING_TYPE: 'OTH',
        APP_HOUSING_STATUS: 'R',
        APP_HOME_PHONE_NUMBER: null,
        APP_CELL_PHONE_NUMBER: '1112223333',
        APP_MOBILE_PHONE_VERIFICATION: null,
        APP_TIME_OWN_HOME_PHONE: null,
        APP_TIME_OWN_CELL_PHONE: '4+',
        APP_CELL_PHONE_SERVICE_TYPE: 'PP',
        APP_EMAIL_ADDRESS: 'EDGARB@24DATA.COM',
        APP_CHECKING_SAVINGS: null,
        APP_EMPLOYMENT_STATUS: 'FT',
        APP_DIRECT_DEPOSIT_IND: 'D',
        APP_EMPLOYER_NAME: 'APP_EMPLOYER_NAME',
        APP_OCCUPATION: 'APP_OCCUPATION',
        APP_EMPLOYER_ADDRESS: 'NA',
        APP_EMPLOYER_CITY: 'NA',
        APP_EMPLOYER_STATE: 'DE',
        APP_EMPLOYER_ZIP: '19702',
        APP_EMPLOYER_PHONE: null,
        APP_LENGTH_OF_EMPLOYMENT: 99,
        APP_PAY_AMOUNT: 1000,
        APP_PAY_FREQUENCY: 'M',
        APP_NEXT_PAY_DATE: '07/13/2021',
        APP_GOVT_ASSISTANCE_AMT: null,
        APP_GOVT_ASSISTANCE_FREQUENCY: null,
        APP_OTHER_INCOME_AMT: null,
        APP_OTHER_INCOME_FREQUENCY: null,
        APP_BANK_IND: 'Y',
        APP_BANK_NAME: 'SCHWAB',
        APP_BANK_ROUTING_NUMBER: '123456789',
        APP_BANK_ACCOUNT_NUMBER: '123456789',
        APP_LOAN_PURPOSE: 'Medical Expenses',
        APP_IP_ADDRESS: '127.0.0.1',
        APP_WI_MARRIED_IND: '0',
        APP_WI_UNMARRIED_IND: '1',
        APP_WI_SPOUSE_NM: null,
        APP_SPOUSE_ADDRESS_1: null,
        APP_SPOUSE_ADDRESS_2: null,
        APP_SPOUSE_CITY: null,
        APP_SPOUSE_STATE: null,
        APP_SPOUSE_ZIP: null,
        APP_ORIG_VEH_AGE: null,
        APP_ORIG_VEH_MAKE: null,
        APP_ORIG_VEH_MODEL: null,
        APP_VIN: null,
        APP_PLATE_NUMBER: null,
        APP_MKT_TXT_MSG: '0',
        APP_UPDATE_IND: '0',
    };

    request = sanitizeData(request);

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, text-plain, */*'
        },
        body: JSON.stringify(request),
    })
        .then((data) => data.json())
        .then((response) => {
            eftSchedule(response);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
};