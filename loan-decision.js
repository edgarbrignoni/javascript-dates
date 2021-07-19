const loanDecision = () => {
    let response = {
        "success": 1,
        "error-messages": null,
        "decisionResponse": {
            "APPLICATION_DATE": "2021-07-12",
            "CTL_SEQUENCE_ID_OUT": "0",
            "CTL_DUPLICATE_DATE_FACTORTRUST": "1800-01-01",
            "CTL_DUPLICATE_FLAG": "0",
            "existing_db": {
                "ECM_SSN": "555555555",
                "ECM_LAST_LOAN_STATUS": "SU",
                "ECM_LAST_LOAN_TYPE": "PL"
            },
            "CTL_EXISTING_FLAG": "SU",
            "APP_UPDATE_IND": "0",
            "APP_MKT_TXT_MSG": "0",
            "APP_WI_UNMARRIED_IND": "1",
            "APP_WI_MARRIED_IND": "0",
            "APP_TIME_AT_ADDRESS": "120",
            "DEC_APPROVE_ROUTING": "O",
            "DEC_FUND_BRANCH": "DE1998",
            "DEC_Fund_Status": "O",
            "DEC_APPROVAL_URL": "https://simplefastloans.com/confirmation-affiliates?amount=1200&name=EDGAR",
            "DEC_FINAL_DECISION": "A",
            "APP_IP_ADDRESS": "127.0.0.1",
            "APP_ID_NUM": "123456789",
            "APP_LICENSE_TYPE": "DL",
            "CTL_SEQUENCE_ID_IN": "0",
            "APP_MILITARY_INDICATOR": "N",
            "APP_BANK_ACCOUNT_NUMBER": "123456789",
            "APP_BANK_ROUTING_NUMBER": "123456789",
            "APP_BANK_NAME": "SCHWAB",
            "APP_BANK_IND": "Y",
            "APP_NEXT_PAY_DATE": "07/13/2021",
            "APP_PAY_FREQUENCY": "M",
            "APP_PAY_AMOUNT": "1000",
            "APP_LENGTH_OF_EMPLOYMENT": "99",
            "APP_EMPLOYER_ZIP": "19702",
            "APP_EMPLOYER_STATE": "DE",
            "APP_EMPLOYER_CITY": "NA",
            "APP_EMPLOYER_ADDRESS": "NA",
            "APP_OCCUPATION": "APP_OCCUPATION",
            "APP_EMPLOYER_NAME": "APP_EMPLOYER_NAME",
            "APP_DIRECT_DEPOSIT_IND": "D",
            "APP_EMPLOYMENT_STATUS": "FT",
            "APP_LOAN_PURPOSE": "Medical Expenses",
            "APP_EMAIL_ADDRESS": "EDGARB@24DATA.COM",
            "APP_CELL_PHONE_SERVICE_TYPE": "PP",
            "APP_TIME_OWN_CELL_PHONE": "4+",
            "APP_CELL_PHONE_NUMBER": "1112223333",
            "APP_HOUSING_STATUS": "R",
            "APP_HOUSING_TYPE": "OTH",
            "APP_ZIP": "19702",
            "APP_STATE": "DE",
            "APP_CITY": "CITY",
            "APP_ADDRESS_1": "OL-ALL-M",
            "APP_SSN": "555555555",
            "APP_DOB": "01/02/1973",
            "APP_LAST_NAME": "TEST",
            "APP_FIRST_NAME": "EDGAR",
            "APP_PRODUCT_TYPE": "SL",
            "APP_SOURCE": "SFL",
            "APP_STORE_BRANCH": "DE1998",
            "APP_LENDER_ID": "4",
            "DEC_LOAN_AMOUNT1": "1200",
            "DEC_LOAN_TERM1": "12",
            "DEC_LOAN_RATE1": "3.600",
            "DEC_LOAN_AMOUNT2": "1200",
            "DEC_LOAN_TERM2": "6",
            "DEC_LOAN_RATE2": "3.600",
            "DEC_LOAN_AMOUNT3": "600",
            "DEC_LOAN_TERM3": "6",
            "DEC_LOAN_RATE3": "3.600",
            "DEC_MIN_LOAN_AMOUNT1": "200",
            "DEC_MIN_LOAN_AMOUNT2": "200",
            "DEC_MIN_LOAN_AMOUNT3": "200",
            "DEC_LOAN_OFFER_TYPE": "Monthly",
            "DEC_SOURCE_GROUPED": "SFL",
            "DEC_CAMPAIGN_IND": "0",
            "DEC_ADV_CREDITOR_ADDR1": "8601 DUNWOODY PLACE SUITE 406",
            "DEC_ADV_CREDITOR_ADDR2": "ATLANTA, GA 30350",
            "DEC_ADV_CREDITOR_PHONE": "(866) 521-1445",
            "DEC_ADV_CREDITOR_NM": "SIMPLE FAST LOANS, INC.",
            "APP_LENDER_ID_STATE": "DE",
            "APP_SOURCE_QUEUES": "SFL",
            "APP_APPLICATION_ID": "60ecb885f1f179e65f003bab",
            "SYSTEM_CREATED_AT": "2021-07-12T17:47:49-04:00",
            "SYSTEM_UPDATED_AT": "2021-07-12T17:47:49-04:00",
            "ONLINE_OFFERS": [
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "200.00",
                    "apr": "364.05",
                    "int_rate": "360.00",
                    "payments": "6",
                    "freq": "Monthly",
                    "payment": "76.22",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "200.00",
                                "principal": "15.07",
                                "charges": "61.15",
                                "other": "0.00",
                                "payment": "76.22",
                                "endingBalance": "184.93"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "184.93",
                                "principal": "19.68",
                                "charges": "56.54",
                                "other": "0.00",
                                "payment": "76.22",
                                "endingBalance": "165.25"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "165.25",
                                "principal": "27.32",
                                "charges": "48.90",
                                "other": "0.00",
                                "payment": "76.22",
                                "endingBalance": "137.93"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "137.93",
                                "principal": "34.05",
                                "charges": "42.17",
                                "other": "0.00",
                                "payment": "76.22",
                                "endingBalance": "103.88"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "103.88",
                                "principal": "45.48",
                                "charges": "30.74",
                                "other": "0.00",
                                "payment": "76.22",
                                "endingBalance": "58.40"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "58.40",
                                "principal": "58.40",
                                "charges": "17.86",
                                "other": "0.00",
                                "payment": "76.26",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "76.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "76.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "76.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "76.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "76.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "76.26",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 2
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "200.00",
                    "apr": "364.05",
                    "int_rate": "360.00",
                    "payments": "6",
                    "freq": "Monthly",
                    "payment": "76.22",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "200.00",
                                "principal": "15.07",
                                "charges": "61.15",
                                "other": "0.00",
                                "payment": "76.22",
                                "endingBalance": "184.93"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "184.93",
                                "principal": "19.68",
                                "charges": "56.54",
                                "other": "0.00",
                                "payment": "76.22",
                                "endingBalance": "165.25"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "165.25",
                                "principal": "27.32",
                                "charges": "48.90",
                                "other": "0.00",
                                "payment": "76.22",
                                "endingBalance": "137.93"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "137.93",
                                "principal": "34.05",
                                "charges": "42.17",
                                "other": "0.00",
                                "payment": "76.22",
                                "endingBalance": "103.88"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "103.88",
                                "principal": "45.48",
                                "charges": "30.74",
                                "other": "0.00",
                                "payment": "76.22",
                                "endingBalance": "58.40"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "58.40",
                                "principal": "58.40",
                                "charges": "17.86",
                                "other": "0.00",
                                "payment": "76.26",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "76.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "76.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "76.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "76.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "76.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "76.26",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 3
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "200.00",
                    "apr": "362.75",
                    "int_rate": "360.00",
                    "payments": "12",
                    "freq": "Monthly",
                    "payment": "63.11",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "200.00",
                                "principal": "1.96",
                                "charges": "61.15",
                                "other": "0.00",
                                "payment": "63.11",
                                "endingBalance": "198.04"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "198.04",
                                "principal": "2.56",
                                "charges": "60.55",
                                "other": "0.00",
                                "payment": "63.11",
                                "endingBalance": "195.48"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "195.48",
                                "principal": "5.27",
                                "charges": "57.84",
                                "other": "0.00",
                                "payment": "63.11",
                                "endingBalance": "190.21"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "190.21",
                                "principal": "4.95",
                                "charges": "58.16",
                                "other": "0.00",
                                "payment": "63.11",
                                "endingBalance": "185.26"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "185.26",
                                "principal": "8.29",
                                "charges": "54.82",
                                "other": "0.00",
                                "payment": "63.11",
                                "endingBalance": "176.97"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "176.97",
                                "principal": "9.00",
                                "charges": "54.11",
                                "other": "0.00",
                                "payment": "63.11",
                                "endingBalance": "167.97"
                            },
                            {
                                "paymentDate": "2022-02-13",
                                "beginningBalance": "167.97",
                                "principal": "11.75",
                                "charges": "51.36",
                                "other": "0.00",
                                "payment": "63.11",
                                "endingBalance": "156.22"
                            },
                            {
                                "paymentDate": "2022-03-13",
                                "beginningBalance": "156.22",
                                "principal": "19.97",
                                "charges": "43.14",
                                "other": "0.00",
                                "payment": "63.11",
                                "endingBalance": "136.25"
                            },
                            {
                                "paymentDate": "2022-04-13",
                                "beginningBalance": "136.25",
                                "principal": "21.45",
                                "charges": "41.66",
                                "other": "0.00",
                                "payment": "63.11",
                                "endingBalance": "114.79"
                            },
                            {
                                "paymentDate": "2022-05-13",
                                "beginningBalance": "114.79",
                                "principal": "29.14",
                                "charges": "33.97",
                                "other": "0.00",
                                "payment": "63.11",
                                "endingBalance": "85.65"
                            },
                            {
                                "paymentDate": "2022-06-13",
                                "beginningBalance": "85.65",
                                "principal": "36.92",
                                "charges": "26.19",
                                "other": "0.00",
                                "payment": "63.11",
                                "endingBalance": "48.73"
                            },
                            {
                                "paymentDate": "2022-07-13",
                                "beginningBalance": "48.73",
                                "principal": "48.73",
                                "charges": "14.42",
                                "other": "0.00",
                                "payment": "63.15",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "63.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "63.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "63.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "63.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "63.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "63.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "7",
                                    "paymentDate": "2022-02-13",
                                    "paymentAmount": "63.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "8",
                                    "paymentDate": "2022-03-13",
                                    "paymentAmount": "63.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "9",
                                    "paymentDate": "2022-04-13",
                                    "paymentAmount": "63.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "10",
                                    "paymentDate": "2022-05-13",
                                    "paymentAmount": "63.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "11",
                                    "paymentDate": "2022-06-13",
                                    "paymentAmount": "63.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "12",
                                    "paymentDate": "2022-07-13",
                                    "paymentAmount": "63.15",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 1
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "300.00",
                    "apr": "364.05",
                    "int_rate": "360.00",
                    "payments": "6",
                    "freq": "Monthly",
                    "payment": "114.33",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "300.00",
                                "principal": "22.60",
                                "charges": "91.73",
                                "other": "0.00",
                                "payment": "114.33",
                                "endingBalance": "277.40"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "277.40",
                                "principal": "29.52",
                                "charges": "84.81",
                                "other": "0.00",
                                "payment": "114.33",
                                "endingBalance": "247.88"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "247.88",
                                "principal": "40.98",
                                "charges": "73.35",
                                "other": "0.00",
                                "payment": "114.33",
                                "endingBalance": "206.90"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "206.90",
                                "principal": "51.07",
                                "charges": "63.26",
                                "other": "0.00",
                                "payment": "114.33",
                                "endingBalance": "155.83"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "155.83",
                                "principal": "68.22",
                                "charges": "46.11",
                                "other": "0.00",
                                "payment": "114.33",
                                "endingBalance": "87.60"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "87.60",
                                "principal": "87.60",
                                "charges": "26.78",
                                "other": "0.00",
                                "payment": "114.39",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "114.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "114.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "114.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "114.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "114.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "114.39",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 2
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "300.00",
                    "apr": "364.05",
                    "int_rate": "360.00",
                    "payments": "6",
                    "freq": "Monthly",
                    "payment": "114.33",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "300.00",
                                "principal": "22.60",
                                "charges": "91.73",
                                "other": "0.00",
                                "payment": "114.33",
                                "endingBalance": "277.40"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "277.40",
                                "principal": "29.52",
                                "charges": "84.81",
                                "other": "0.00",
                                "payment": "114.33",
                                "endingBalance": "247.88"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "247.88",
                                "principal": "40.98",
                                "charges": "73.35",
                                "other": "0.00",
                                "payment": "114.33",
                                "endingBalance": "206.90"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "206.90",
                                "principal": "51.07",
                                "charges": "63.26",
                                "other": "0.00",
                                "payment": "114.33",
                                "endingBalance": "155.83"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "155.83",
                                "principal": "68.22",
                                "charges": "46.11",
                                "other": "0.00",
                                "payment": "114.33",
                                "endingBalance": "87.60"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "87.60",
                                "principal": "87.60",
                                "charges": "26.78",
                                "other": "0.00",
                                "payment": "114.39",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "114.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "114.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "114.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "114.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "114.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "114.39",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 3
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "300.00",
                    "apr": "362.75",
                    "int_rate": "360.00",
                    "payments": "12",
                    "freq": "Monthly",
                    "payment": "94.67",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "300.00",
                                "principal": "2.94",
                                "charges": "91.73",
                                "other": "0.00",
                                "payment": "94.67",
                                "endingBalance": "297.06"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "297.06",
                                "principal": "3.84",
                                "charges": "90.83",
                                "other": "0.00",
                                "payment": "94.67",
                                "endingBalance": "293.21"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "293.21",
                                "principal": "7.91",
                                "charges": "86.76",
                                "other": "0.00",
                                "payment": "94.67",
                                "endingBalance": "285.30"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "285.30",
                                "principal": "7.44",
                                "charges": "87.23",
                                "other": "0.00",
                                "payment": "94.67",
                                "endingBalance": "277.86"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "277.86",
                                "principal": "12.45",
                                "charges": "82.22",
                                "other": "0.00",
                                "payment": "94.67",
                                "endingBalance": "265.41"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "265.41",
                                "principal": "13.52",
                                "charges": "81.15",
                                "other": "0.00",
                                "payment": "94.67",
                                "endingBalance": "251.89"
                            },
                            {
                                "paymentDate": "2022-02-13",
                                "beginningBalance": "251.89",
                                "principal": "17.65",
                                "charges": "77.02",
                                "other": "0.00",
                                "payment": "94.67",
                                "endingBalance": "234.23"
                            },
                            {
                                "paymentDate": "2022-03-13",
                                "beginningBalance": "234.23",
                                "principal": "29.98",
                                "charges": "64.69",
                                "other": "0.00",
                                "payment": "94.67",
                                "endingBalance": "204.25"
                            },
                            {
                                "paymentDate": "2022-04-13",
                                "beginningBalance": "204.25",
                                "principal": "32.22",
                                "charges": "62.45",
                                "other": "0.00",
                                "payment": "94.67",
                                "endingBalance": "172.03"
                            },
                            {
                                "paymentDate": "2022-05-13",
                                "beginningBalance": "172.03",
                                "principal": "43.77",
                                "charges": "50.90",
                                "other": "0.00",
                                "payment": "94.67",
                                "endingBalance": "128.26"
                            },
                            {
                                "paymentDate": "2022-06-13",
                                "beginningBalance": "128.26",
                                "principal": "55.45",
                                "charges": "39.22",
                                "other": "0.00",
                                "payment": "94.67",
                                "endingBalance": "72.81"
                            },
                            {
                                "paymentDate": "2022-07-13",
                                "beginningBalance": "72.81",
                                "principal": "72.81",
                                "charges": "21.54",
                                "other": "0.00",
                                "payment": "94.36",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "94.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "94.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "94.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "94.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "94.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "94.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "7",
                                    "paymentDate": "2022-02-13",
                                    "paymentAmount": "94.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "8",
                                    "paymentDate": "2022-03-13",
                                    "paymentAmount": "94.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "9",
                                    "paymentDate": "2022-04-13",
                                    "paymentAmount": "94.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "10",
                                    "paymentDate": "2022-05-13",
                                    "paymentAmount": "94.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "11",
                                    "paymentDate": "2022-06-13",
                                    "paymentAmount": "94.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "12",
                                    "paymentDate": "2022-07-13",
                                    "paymentAmount": "94.36",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 1
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "400.00",
                    "apr": "364.05",
                    "int_rate": "360.00",
                    "payments": "6",
                    "freq": "Monthly",
                    "payment": "152.45",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "400.00",
                                "principal": "30.15",
                                "charges": "122.30",
                                "other": "0.00",
                                "payment": "152.45",
                                "endingBalance": "369.85"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "369.85",
                                "principal": "39.37",
                                "charges": "113.08",
                                "other": "0.00",
                                "payment": "152.45",
                                "endingBalance": "330.48"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "330.48",
                                "principal": "54.66",
                                "charges": "97.79",
                                "other": "0.00",
                                "payment": "152.45",
                                "endingBalance": "275.82"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "275.82",
                                "principal": "68.12",
                                "charges": "84.33",
                                "other": "0.00",
                                "payment": "152.45",
                                "endingBalance": "207.71"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "207.71",
                                "principal": "90.99",
                                "charges": "61.46",
                                "other": "0.00",
                                "payment": "152.45",
                                "endingBalance": "116.71"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "116.71",
                                "principal": "116.71",
                                "charges": "35.69",
                                "other": "0.00",
                                "payment": "152.40",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "152.45",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "152.45",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "152.45",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "152.45",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "152.45",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "152.40",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 3
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "400.00",
                    "apr": "364.05",
                    "int_rate": "360.00",
                    "payments": "6",
                    "freq": "Monthly",
                    "payment": "152.45",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "400.00",
                                "principal": "30.15",
                                "charges": "122.30",
                                "other": "0.00",
                                "payment": "152.45",
                                "endingBalance": "369.85"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "369.85",
                                "principal": "39.37",
                                "charges": "113.08",
                                "other": "0.00",
                                "payment": "152.45",
                                "endingBalance": "330.48"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "330.48",
                                "principal": "54.66",
                                "charges": "97.79",
                                "other": "0.00",
                                "payment": "152.45",
                                "endingBalance": "275.82"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "275.82",
                                "principal": "68.12",
                                "charges": "84.33",
                                "other": "0.00",
                                "payment": "152.45",
                                "endingBalance": "207.71"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "207.71",
                                "principal": "90.99",
                                "charges": "61.46",
                                "other": "0.00",
                                "payment": "152.45",
                                "endingBalance": "116.71"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "116.71",
                                "principal": "116.71",
                                "charges": "35.69",
                                "other": "0.00",
                                "payment": "152.40",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "152.45",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "152.45",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "152.45",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "152.45",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "152.45",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "152.40",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 2
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "400.00",
                    "apr": "362.75",
                    "int_rate": "360.00",
                    "payments": "12",
                    "freq": "Monthly",
                    "payment": "126.22",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "400.00",
                                "principal": "3.92",
                                "charges": "122.30",
                                "other": "0.00",
                                "payment": "126.22",
                                "endingBalance": "396.08"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "396.08",
                                "principal": "5.12",
                                "charges": "121.10",
                                "other": "0.00",
                                "payment": "126.22",
                                "endingBalance": "390.96"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "390.96",
                                "principal": "10.54",
                                "charges": "115.68",
                                "other": "0.00",
                                "payment": "126.22",
                                "endingBalance": "380.43"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "380.43",
                                "principal": "9.90",
                                "charges": "116.32",
                                "other": "0.00",
                                "payment": "126.22",
                                "endingBalance": "370.52"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "370.52",
                                "principal": "16.59",
                                "charges": "109.63",
                                "other": "0.00",
                                "payment": "126.22",
                                "endingBalance": "353.94"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "353.94",
                                "principal": "18.00",
                                "charges": "108.22",
                                "other": "0.00",
                                "payment": "126.22",
                                "endingBalance": "335.94"
                            },
                            {
                                "paymentDate": "2022-02-13",
                                "beginningBalance": "335.94",
                                "principal": "23.51",
                                "charges": "102.71",
                                "other": "0.00",
                                "payment": "126.22",
                                "endingBalance": "312.43"
                            },
                            {
                                "paymentDate": "2022-03-13",
                                "beginningBalance": "312.43",
                                "principal": "39.94",
                                "charges": "86.28",
                                "other": "0.00",
                                "payment": "126.22",
                                "endingBalance": "272.49"
                            },
                            {
                                "paymentDate": "2022-04-13",
                                "beginningBalance": "272.49",
                                "principal": "42.90",
                                "charges": "83.32",
                                "other": "0.00",
                                "payment": "126.22",
                                "endingBalance": "229.59"
                            },
                            {
                                "paymentDate": "2022-05-13",
                                "beginningBalance": "229.59",
                                "principal": "58.29",
                                "charges": "67.93",
                                "other": "0.00",
                                "payment": "126.22",
                                "endingBalance": "171.30"
                            },
                            {
                                "paymentDate": "2022-06-13",
                                "beginningBalance": "171.30",
                                "principal": "73.84",
                                "charges": "52.38",
                                "other": "0.00",
                                "payment": "126.22",
                                "endingBalance": "97.46"
                            },
                            {
                                "paymentDate": "2022-07-13",
                                "beginningBalance": "97.46",
                                "principal": "97.46",
                                "charges": "28.84",
                                "other": "0.00",
                                "payment": "126.29",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "126.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "126.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "126.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "126.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "126.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "126.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "7",
                                    "paymentDate": "2022-02-13",
                                    "paymentAmount": "126.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "8",
                                    "paymentDate": "2022-03-13",
                                    "paymentAmount": "126.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "9",
                                    "paymentDate": "2022-04-13",
                                    "paymentAmount": "126.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "10",
                                    "paymentDate": "2022-05-13",
                                    "paymentAmount": "126.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "11",
                                    "paymentDate": "2022-06-13",
                                    "paymentAmount": "126.22",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "12",
                                    "paymentDate": "2022-07-13",
                                    "paymentAmount": "126.29",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 1
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "500.00",
                    "apr": "364.05",
                    "int_rate": "360.00",
                    "payments": "6",
                    "freq": "Monthly",
                    "payment": "190.56",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "500.00",
                                "principal": "37.68",
                                "charges": "152.88",
                                "other": "0.00",
                                "payment": "190.56",
                                "endingBalance": "462.32"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "462.32",
                                "principal": "49.21",
                                "charges": "141.35",
                                "other": "0.00",
                                "payment": "190.56",
                                "endingBalance": "413.11"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "413.11",
                                "principal": "68.32",
                                "charges": "122.24",
                                "other": "0.00",
                                "payment": "190.56",
                                "endingBalance": "344.79"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "344.79",
                                "principal": "85.14",
                                "charges": "105.42",
                                "other": "0.00",
                                "payment": "190.56",
                                "endingBalance": "259.65"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "259.65",
                                "principal": "113.73",
                                "charges": "76.83",
                                "other": "0.00",
                                "payment": "190.56",
                                "endingBalance": "145.91"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "145.91",
                                "principal": "145.91",
                                "charges": "44.61",
                                "other": "0.00",
                                "payment": "190.53",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "190.56",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "190.56",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "190.56",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "190.56",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "190.56",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "190.53",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 2
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "500.00",
                    "apr": "364.05",
                    "int_rate": "360.00",
                    "payments": "6",
                    "freq": "Monthly",
                    "payment": "190.56",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "500.00",
                                "principal": "37.68",
                                "charges": "152.88",
                                "other": "0.00",
                                "payment": "190.56",
                                "endingBalance": "462.32"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "462.32",
                                "principal": "49.21",
                                "charges": "141.35",
                                "other": "0.00",
                                "payment": "190.56",
                                "endingBalance": "413.11"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "413.11",
                                "principal": "68.32",
                                "charges": "122.24",
                                "other": "0.00",
                                "payment": "190.56",
                                "endingBalance": "344.79"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "344.79",
                                "principal": "85.14",
                                "charges": "105.42",
                                "other": "0.00",
                                "payment": "190.56",
                                "endingBalance": "259.65"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "259.65",
                                "principal": "113.73",
                                "charges": "76.83",
                                "other": "0.00",
                                "payment": "190.56",
                                "endingBalance": "145.91"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "145.91",
                                "principal": "145.91",
                                "charges": "44.61",
                                "other": "0.00",
                                "payment": "190.53",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "190.56",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "190.56",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "190.56",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "190.56",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "190.56",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "190.53",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 3
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "500.00",
                    "apr": "362.75",
                    "int_rate": "360.00",
                    "payments": "12",
                    "freq": "Monthly",
                    "payment": "157.78",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "500.00",
                                "principal": "4.90",
                                "charges": "152.88",
                                "other": "0.00",
                                "payment": "157.78",
                                "endingBalance": "495.10"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "495.10",
                                "principal": "6.40",
                                "charges": "151.38",
                                "other": "0.00",
                                "payment": "157.78",
                                "endingBalance": "488.69"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "488.69",
                                "principal": "13.18",
                                "charges": "144.60",
                                "other": "0.00",
                                "payment": "157.78",
                                "endingBalance": "475.51"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "475.51",
                                "principal": "12.39",
                                "charges": "145.39",
                                "other": "0.00",
                                "payment": "157.78",
                                "endingBalance": "463.12"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "463.12",
                                "principal": "20.75",
                                "charges": "137.03",
                                "other": "0.00",
                                "payment": "157.78",
                                "endingBalance": "442.38"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "442.38",
                                "principal": "22.52",
                                "charges": "135.26",
                                "other": "0.00",
                                "payment": "157.78",
                                "endingBalance": "419.86"
                            },
                            {
                                "paymentDate": "2022-02-13",
                                "beginningBalance": "419.86",
                                "principal": "29.41",
                                "charges": "128.37",
                                "other": "0.00",
                                "payment": "157.78",
                                "endingBalance": "390.45"
                            },
                            {
                                "paymentDate": "2022-03-13",
                                "beginningBalance": "390.45",
                                "principal": "49.95",
                                "charges": "107.83",
                                "other": "0.00",
                                "payment": "157.78",
                                "endingBalance": "340.50"
                            },
                            {
                                "paymentDate": "2022-04-13",
                                "beginningBalance": "340.50",
                                "principal": "53.67",
                                "charges": "104.11",
                                "other": "0.00",
                                "payment": "157.78",
                                "endingBalance": "286.83"
                            },
                            {
                                "paymentDate": "2022-05-13",
                                "beginningBalance": "286.83",
                                "principal": "72.91",
                                "charges": "84.87",
                                "other": "0.00",
                                "payment": "157.78",
                                "endingBalance": "213.92"
                            },
                            {
                                "paymentDate": "2022-06-13",
                                "beginningBalance": "213.92",
                                "principal": "92.37",
                                "charges": "65.41",
                                "other": "0.00",
                                "payment": "157.78",
                                "endingBalance": "121.54"
                            },
                            {
                                "paymentDate": "2022-07-13",
                                "beginningBalance": "121.54",
                                "principal": "121.54",
                                "charges": "35.96",
                                "other": "0.00",
                                "payment": "157.50",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "157.78",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "157.78",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "157.78",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "157.78",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "157.78",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "157.78",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "7",
                                    "paymentDate": "2022-02-13",
                                    "paymentAmount": "157.78",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "8",
                                    "paymentDate": "2022-03-13",
                                    "paymentAmount": "157.78",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "9",
                                    "paymentDate": "2022-04-13",
                                    "paymentAmount": "157.78",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "10",
                                    "paymentDate": "2022-05-13",
                                    "paymentAmount": "157.78",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "11",
                                    "paymentDate": "2022-06-13",
                                    "paymentAmount": "157.78",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "12",
                                    "paymentDate": "2022-07-13",
                                    "paymentAmount": "157.50",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 1
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "600.00",
                    "apr": "364.05",
                    "int_rate": "360.00",
                    "payments": "6",
                    "freq": "Monthly",
                    "payment": "228.67",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "600.00",
                                "principal": "45.22",
                                "charges": "183.45",
                                "other": "0.00",
                                "payment": "228.67",
                                "endingBalance": "554.78"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "554.78",
                                "principal": "59.04",
                                "charges": "169.63",
                                "other": "0.00",
                                "payment": "228.67",
                                "endingBalance": "495.74"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "495.74",
                                "principal": "81.99",
                                "charges": "146.68",
                                "other": "0.00",
                                "payment": "228.67",
                                "endingBalance": "413.75"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "413.75",
                                "principal": "102.16",
                                "charges": "126.51",
                                "other": "0.00",
                                "payment": "228.67",
                                "endingBalance": "311.59"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "311.59",
                                "principal": "136.47",
                                "charges": "92.20",
                                "other": "0.00",
                                "payment": "228.67",
                                "endingBalance": "175.12"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "175.12",
                                "principal": "175.12",
                                "charges": "53.54",
                                "other": "0.00",
                                "payment": "228.66",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "228.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "228.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "228.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "228.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "228.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "228.66",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 2
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "600.00",
                    "apr": "364.05",
                    "int_rate": "360.00",
                    "payments": "6",
                    "freq": "Monthly",
                    "payment": "228.67",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "600.00",
                                "principal": "45.22",
                                "charges": "183.45",
                                "other": "0.00",
                                "payment": "228.67",
                                "endingBalance": "554.78"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "554.78",
                                "principal": "59.04",
                                "charges": "169.63",
                                "other": "0.00",
                                "payment": "228.67",
                                "endingBalance": "495.74"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "495.74",
                                "principal": "81.99",
                                "charges": "146.68",
                                "other": "0.00",
                                "payment": "228.67",
                                "endingBalance": "413.75"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "413.75",
                                "principal": "102.16",
                                "charges": "126.51",
                                "other": "0.00",
                                "payment": "228.67",
                                "endingBalance": "311.59"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "311.59",
                                "principal": "136.47",
                                "charges": "92.20",
                                "other": "0.00",
                                "payment": "228.67",
                                "endingBalance": "175.12"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "175.12",
                                "principal": "175.12",
                                "charges": "53.54",
                                "other": "0.00",
                                "payment": "228.66",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "228.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "228.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "228.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "228.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "228.67",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "228.66",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 3,
                    "parent_offer": 3,
                    "min": 200
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "600.00",
                    "apr": "362.75",
                    "int_rate": "360.00",
                    "payments": "12",
                    "freq": "Monthly",
                    "payment": "189.33",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "600.00",
                                "principal": "5.88",
                                "charges": "183.45",
                                "other": "0.00",
                                "payment": "189.33",
                                "endingBalance": "594.12"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "594.12",
                                "principal": "7.68",
                                "charges": "181.65",
                                "other": "0.00",
                                "payment": "189.33",
                                "endingBalance": "586.45"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "586.45",
                                "principal": "15.81",
                                "charges": "173.52",
                                "other": "0.00",
                                "payment": "189.33",
                                "endingBalance": "570.64"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "570.64",
                                "principal": "14.85",
                                "charges": "174.48",
                                "other": "0.00",
                                "payment": "189.33",
                                "endingBalance": "555.79"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "555.79",
                                "principal": "24.88",
                                "charges": "164.45",
                                "other": "0.00",
                                "payment": "189.33",
                                "endingBalance": "530.91"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "530.91",
                                "principal": "27.00",
                                "charges": "162.33",
                                "other": "0.00",
                                "payment": "189.33",
                                "endingBalance": "503.91"
                            },
                            {
                                "paymentDate": "2022-02-13",
                                "beginningBalance": "503.91",
                                "principal": "35.26",
                                "charges": "154.07",
                                "other": "0.00",
                                "payment": "189.33",
                                "endingBalance": "468.65"
                            },
                            {
                                "paymentDate": "2022-03-13",
                                "beginningBalance": "468.65",
                                "principal": "59.91",
                                "charges": "129.42",
                                "other": "0.00",
                                "payment": "189.33",
                                "endingBalance": "408.74"
                            },
                            {
                                "paymentDate": "2022-04-13",
                                "beginningBalance": "408.74",
                                "principal": "64.36",
                                "charges": "124.97",
                                "other": "0.00",
                                "payment": "189.33",
                                "endingBalance": "344.38"
                            },
                            {
                                "paymentDate": "2022-05-13",
                                "beginningBalance": "344.38",
                                "principal": "87.43",
                                "charges": "101.90",
                                "other": "0.00",
                                "payment": "189.33",
                                "endingBalance": "256.95"
                            },
                            {
                                "paymentDate": "2022-06-13",
                                "beginningBalance": "256.95",
                                "principal": "110.77",
                                "charges": "78.56",
                                "other": "0.00",
                                "payment": "189.33",
                                "endingBalance": "146.19"
                            },
                            {
                                "paymentDate": "2022-07-13",
                                "beginningBalance": "146.19",
                                "principal": "146.19",
                                "charges": "43.26",
                                "other": "0.00",
                                "payment": "189.44",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "189.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "189.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "189.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "189.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "189.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "189.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "7",
                                    "paymentDate": "2022-02-13",
                                    "paymentAmount": "189.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "8",
                                    "paymentDate": "2022-03-13",
                                    "paymentAmount": "189.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "9",
                                    "paymentDate": "2022-04-13",
                                    "paymentAmount": "189.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "10",
                                    "paymentDate": "2022-05-13",
                                    "paymentAmount": "189.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "11",
                                    "paymentDate": "2022-06-13",
                                    "paymentAmount": "189.33",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "12",
                                    "paymentDate": "2022-07-13",
                                    "paymentAmount": "189.44",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 1
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "700.00",
                    "apr": "364.05",
                    "int_rate": "360.00",
                    "payments": "6",
                    "freq": "Monthly",
                    "payment": "266.78",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "700.00",
                                "principal": "52.75",
                                "charges": "214.03",
                                "other": "0.00",
                                "payment": "266.78",
                                "endingBalance": "647.25"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "647.25",
                                "principal": "68.88",
                                "charges": "197.90",
                                "other": "0.00",
                                "payment": "266.78",
                                "endingBalance": "578.37"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "578.37",
                                "principal": "95.65",
                                "charges": "171.13",
                                "other": "0.00",
                                "payment": "266.78",
                                "endingBalance": "482.72"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "482.72",
                                "principal": "119.19",
                                "charges": "147.59",
                                "other": "0.00",
                                "payment": "266.78",
                                "endingBalance": "363.53"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "363.53",
                                "principal": "159.21",
                                "charges": "107.57",
                                "other": "0.00",
                                "payment": "266.78",
                                "endingBalance": "204.32"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "204.32",
                                "principal": "204.32",
                                "charges": "62.47",
                                "other": "0.00",
                                "payment": "266.79",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "266.78",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "266.78",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "266.78",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "266.78",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "266.78",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "266.79",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 2
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "700.00",
                    "apr": "362.75",
                    "int_rate": "360.00",
                    "payments": "12",
                    "freq": "Monthly",
                    "payment": "220.89",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "700.00",
                                "principal": "6.86",
                                "charges": "214.03",
                                "other": "0.00",
                                "payment": "220.89",
                                "endingBalance": "693.14"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "693.14",
                                "principal": "8.96",
                                "charges": "211.93",
                                "other": "0.00",
                                "payment": "220.89",
                                "endingBalance": "684.18"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "684.18",
                                "principal": "18.45",
                                "charges": "202.44",
                                "other": "0.00",
                                "payment": "220.89",
                                "endingBalance": "665.73"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "665.73",
                                "principal": "17.34",
                                "charges": "203.55",
                                "other": "0.00",
                                "payment": "220.89",
                                "endingBalance": "648.39"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "648.39",
                                "principal": "29.04",
                                "charges": "191.85",
                                "other": "0.00",
                                "payment": "220.89",
                                "endingBalance": "619.35"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "619.35",
                                "principal": "31.52",
                                "charges": "189.37",
                                "other": "0.00",
                                "payment": "220.89",
                                "endingBalance": "587.83"
                            },
                            {
                                "paymentDate": "2022-02-13",
                                "beginningBalance": "587.83",
                                "principal": "41.16",
                                "charges": "179.73",
                                "other": "0.00",
                                "payment": "220.89",
                                "endingBalance": "546.66"
                            },
                            {
                                "paymentDate": "2022-03-13",
                                "beginningBalance": "546.66",
                                "principal": "69.92",
                                "charges": "150.97",
                                "other": "0.00",
                                "payment": "220.89",
                                "endingBalance": "476.74"
                            },
                            {
                                "paymentDate": "2022-04-13",
                                "beginningBalance": "476.74",
                                "principal": "75.12",
                                "charges": "145.77",
                                "other": "0.00",
                                "payment": "220.89",
                                "endingBalance": "401.62"
                            },
                            {
                                "paymentDate": "2022-05-13",
                                "beginningBalance": "401.62",
                                "principal": "102.05",
                                "charges": "118.84",
                                "other": "0.00",
                                "payment": "220.89",
                                "endingBalance": "299.57"
                            },
                            {
                                "paymentDate": "2022-06-13",
                                "beginningBalance": "299.57",
                                "principal": "129.30",
                                "charges": "91.59",
                                "other": "0.00",
                                "payment": "220.89",
                                "endingBalance": "170.27"
                            },
                            {
                                "paymentDate": "2022-07-13",
                                "beginningBalance": "170.27",
                                "principal": "170.27",
                                "charges": "50.38",
                                "other": "0.00",
                                "payment": "220.65",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "220.89",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "220.89",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "220.89",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "220.89",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "220.89",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "220.89",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "7",
                                    "paymentDate": "2022-02-13",
                                    "paymentAmount": "220.89",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "8",
                                    "paymentDate": "2022-03-13",
                                    "paymentAmount": "220.89",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "9",
                                    "paymentDate": "2022-04-13",
                                    "paymentAmount": "220.89",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "10",
                                    "paymentDate": "2022-05-13",
                                    "paymentAmount": "220.89",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "11",
                                    "paymentDate": "2022-06-13",
                                    "paymentAmount": "220.89",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "12",
                                    "paymentDate": "2022-07-13",
                                    "paymentAmount": "220.65",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 1
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "800.00",
                    "apr": "364.05",
                    "int_rate": "360.00",
                    "payments": "6",
                    "freq": "Monthly",
                    "payment": "304.89",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "800.00",
                                "principal": "60.29",
                                "charges": "244.60",
                                "other": "0.00",
                                "payment": "304.89",
                                "endingBalance": "739.71"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "739.71",
                                "principal": "78.72",
                                "charges": "226.17",
                                "other": "0.00",
                                "payment": "304.89",
                                "endingBalance": "660.99"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "660.99",
                                "principal": "109.31",
                                "charges": "195.58",
                                "other": "0.00",
                                "payment": "304.89",
                                "endingBalance": "551.68"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "551.68",
                                "principal": "136.21",
                                "charges": "168.68",
                                "other": "0.00",
                                "payment": "304.89",
                                "endingBalance": "415.47"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "415.47",
                                "principal": "181.96",
                                "charges": "122.93",
                                "other": "0.00",
                                "payment": "304.89",
                                "endingBalance": "233.52"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "233.52",
                                "principal": "233.52",
                                "charges": "71.40",
                                "other": "0.00",
                                "payment": "304.92",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "304.89",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "304.89",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "304.89",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "304.89",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "304.89",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "304.92",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 2
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "800.00",
                    "apr": "362.75",
                    "int_rate": "360.00",
                    "payments": "12",
                    "freq": "Monthly",
                    "payment": "252.44",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "800.00",
                                "principal": "7.84",
                                "charges": "244.60",
                                "other": "0.00",
                                "payment": "252.44",
                                "endingBalance": "792.16"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "792.16",
                                "principal": "10.23",
                                "charges": "242.21",
                                "other": "0.00",
                                "payment": "252.44",
                                "endingBalance": "781.93"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "781.93",
                                "principal": "21.07",
                                "charges": "231.37",
                                "other": "0.00",
                                "payment": "252.44",
                                "endingBalance": "760.85"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "760.85",
                                "principal": "19.81",
                                "charges": "232.63",
                                "other": "0.00",
                                "payment": "252.44",
                                "endingBalance": "741.05"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "741.05",
                                "principal": "33.17",
                                "charges": "219.27",
                                "other": "0.00",
                                "payment": "252.44",
                                "endingBalance": "707.88"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "707.88",
                                "principal": "36.00",
                                "charges": "216.44",
                                "other": "0.00",
                                "payment": "252.44",
                                "endingBalance": "671.87"
                            },
                            {
                                "paymentDate": "2022-02-13",
                                "beginningBalance": "671.87",
                                "principal": "47.01",
                                "charges": "205.43",
                                "other": "0.00",
                                "payment": "252.44",
                                "endingBalance": "624.86"
                            },
                            {
                                "paymentDate": "2022-03-13",
                                "beginningBalance": "624.86",
                                "principal": "79.88",
                                "charges": "172.56",
                                "other": "0.00",
                                "payment": "252.44",
                                "endingBalance": "544.99"
                            },
                            {
                                "paymentDate": "2022-04-13",
                                "beginningBalance": "544.99",
                                "principal": "85.81",
                                "charges": "166.63",
                                "other": "0.00",
                                "payment": "252.44",
                                "endingBalance": "459.18"
                            },
                            {
                                "paymentDate": "2022-05-13",
                                "beginningBalance": "459.18",
                                "principal": "116.57",
                                "charges": "135.87",
                                "other": "0.00",
                                "payment": "252.44",
                                "endingBalance": "342.60"
                            },
                            {
                                "paymentDate": "2022-06-13",
                                "beginningBalance": "342.60",
                                "principal": "147.69",
                                "charges": "104.75",
                                "other": "0.00",
                                "payment": "252.44",
                                "endingBalance": "194.91"
                            },
                            {
                                "paymentDate": "2022-07-13",
                                "beginningBalance": "194.91",
                                "principal": "194.91",
                                "charges": "57.67",
                                "other": "0.00",
                                "payment": "252.59",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "252.44",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "252.44",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "252.44",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "252.44",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "252.44",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "252.44",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "7",
                                    "paymentDate": "2022-02-13",
                                    "paymentAmount": "252.44",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "8",
                                    "paymentDate": "2022-03-13",
                                    "paymentAmount": "252.44",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "9",
                                    "paymentDate": "2022-04-13",
                                    "paymentAmount": "252.44",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "10",
                                    "paymentDate": "2022-05-13",
                                    "paymentAmount": "252.44",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "11",
                                    "paymentDate": "2022-06-13",
                                    "paymentAmount": "252.44",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "12",
                                    "paymentDate": "2022-07-13",
                                    "paymentAmount": "252.59",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 1
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "900.00",
                    "apr": "364.05",
                    "int_rate": "360.00",
                    "payments": "6",
                    "freq": "Monthly",
                    "payment": "343.00",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "900.00",
                                "principal": "67.82",
                                "charges": "275.18",
                                "other": "0.00",
                                "payment": "343.00",
                                "endingBalance": "832.18"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "832.18",
                                "principal": "88.56",
                                "charges": "254.44",
                                "other": "0.00",
                                "payment": "343.00",
                                "endingBalance": "743.62"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "743.62",
                                "principal": "122.97",
                                "charges": "220.03",
                                "other": "0.00",
                                "payment": "343.00",
                                "endingBalance": "620.65"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "620.65",
                                "principal": "153.23",
                                "charges": "189.77",
                                "other": "0.00",
                                "payment": "343.00",
                                "endingBalance": "467.41"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "467.41",
                                "principal": "204.70",
                                "charges": "138.30",
                                "other": "0.00",
                                "payment": "343.00",
                                "endingBalance": "262.72"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "262.72",
                                "principal": "262.72",
                                "charges": "80.33",
                                "other": "0.00",
                                "payment": "343.05",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "343.00",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "343.00",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "343.00",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "343.00",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "343.00",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "343.05",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 2
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "900.00",
                    "apr": "362.75",
                    "int_rate": "360.00",
                    "payments": "12",
                    "freq": "Monthly",
                    "payment": "284.00",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "900.00",
                                "principal": "8.82",
                                "charges": "275.18",
                                "other": "0.00",
                                "payment": "284.00",
                                "endingBalance": "891.18"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "891.18",
                                "principal": "11.52",
                                "charges": "272.48",
                                "other": "0.00",
                                "payment": "284.00",
                                "endingBalance": "879.66"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "879.66",
                                "principal": "23.72",
                                "charges": "260.28",
                                "other": "0.00",
                                "payment": "284.00",
                                "endingBalance": "855.94"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "855.94",
                                "principal": "22.29",
                                "charges": "261.71",
                                "other": "0.00",
                                "payment": "284.00",
                                "endingBalance": "833.65"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "833.65",
                                "principal": "37.33",
                                "charges": "246.67",
                                "other": "0.00",
                                "payment": "284.00",
                                "endingBalance": "796.32"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "796.32",
                                "principal": "40.52",
                                "charges": "243.48",
                                "other": "0.00",
                                "payment": "284.00",
                                "endingBalance": "755.79"
                            },
                            {
                                "paymentDate": "2022-02-13",
                                "beginningBalance": "755.79",
                                "principal": "52.91",
                                "charges": "231.09",
                                "other": "0.00",
                                "payment": "284.00",
                                "endingBalance": "702.88"
                            },
                            {
                                "paymentDate": "2022-03-13",
                                "beginningBalance": "702.88",
                                "principal": "89.89",
                                "charges": "194.11",
                                "other": "0.00",
                                "payment": "284.00",
                                "endingBalance": "612.99"
                            },
                            {
                                "paymentDate": "2022-04-13",
                                "beginningBalance": "612.99",
                                "principal": "96.58",
                                "charges": "187.42",
                                "other": "0.00",
                                "payment": "284.00",
                                "endingBalance": "516.41"
                            },
                            {
                                "paymentDate": "2022-05-13",
                                "beginningBalance": "516.41",
                                "principal": "131.20",
                                "charges": "152.80",
                                "other": "0.00",
                                "payment": "284.00",
                                "endingBalance": "385.22"
                            },
                            {
                                "paymentDate": "2022-06-13",
                                "beginningBalance": "385.22",
                                "principal": "166.22",
                                "charges": "117.78",
                                "other": "0.00",
                                "payment": "284.00",
                                "endingBalance": "219.00"
                            },
                            {
                                "paymentDate": "2022-07-13",
                                "beginningBalance": "219.00",
                                "principal": "219.00",
                                "charges": "64.80",
                                "other": "0.00",
                                "payment": "283.80",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "284.00",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "284.00",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "284.00",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "284.00",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "284.00",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "284.00",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "7",
                                    "paymentDate": "2022-02-13",
                                    "paymentAmount": "284.00",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "8",
                                    "paymentDate": "2022-03-13",
                                    "paymentAmount": "284.00",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "9",
                                    "paymentDate": "2022-04-13",
                                    "paymentAmount": "284.00",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "10",
                                    "paymentDate": "2022-05-13",
                                    "paymentAmount": "284.00",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "11",
                                    "paymentDate": "2022-06-13",
                                    "paymentAmount": "284.00",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "12",
                                    "paymentDate": "2022-07-13",
                                    "paymentAmount": "283.80",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 1
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "1000.00",
                    "apr": "364.05",
                    "int_rate": "360.00",
                    "payments": "6",
                    "freq": "Monthly",
                    "payment": "381.12",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "1000.00",
                                "principal": "75.37",
                                "charges": "305.75",
                                "other": "0.00",
                                "payment": "381.12",
                                "endingBalance": "924.63"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "924.63",
                                "principal": "98.41",
                                "charges": "282.71",
                                "other": "0.00",
                                "payment": "381.12",
                                "endingBalance": "826.22"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "826.22",
                                "principal": "136.65",
                                "charges": "244.47",
                                "other": "0.00",
                                "payment": "381.12",
                                "endingBalance": "689.57"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "689.57",
                                "principal": "170.28",
                                "charges": "210.84",
                                "other": "0.00",
                                "payment": "381.12",
                                "endingBalance": "519.29"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "519.29",
                                "principal": "227.47",
                                "charges": "153.65",
                                "other": "0.00",
                                "payment": "381.12",
                                "endingBalance": "291.83"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "291.83",
                                "principal": "291.83",
                                "charges": "89.23",
                                "other": "0.00",
                                "payment": "381.06",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "381.12",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "381.12",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "381.12",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "381.12",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "381.12",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "381.06",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 2
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "1000.00",
                    "apr": "362.75",
                    "int_rate": "360.00",
                    "payments": "12",
                    "freq": "Monthly",
                    "payment": "315.55",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "1000.00",
                                "principal": "9.80",
                                "charges": "305.75",
                                "other": "0.00",
                                "payment": "315.55",
                                "endingBalance": "990.20"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "990.20",
                                "principal": "12.79",
                                "charges": "302.76",
                                "other": "0.00",
                                "payment": "315.55",
                                "endingBalance": "977.41"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "977.41",
                                "principal": "26.34",
                                "charges": "289.21",
                                "other": "0.00",
                                "payment": "315.55",
                                "endingBalance": "951.07"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "951.07",
                                "principal": "24.76",
                                "charges": "290.79",
                                "other": "0.00",
                                "payment": "315.55",
                                "endingBalance": "926.31"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "926.31",
                                "principal": "41.46",
                                "charges": "274.09",
                                "other": "0.00",
                                "payment": "315.55",
                                "endingBalance": "884.85"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "884.85",
                                "principal": "45.01",
                                "charges": "270.54",
                                "other": "0.00",
                                "payment": "315.55",
                                "endingBalance": "839.84"
                            },
                            {
                                "paymentDate": "2022-02-13",
                                "beginningBalance": "839.84",
                                "principal": "58.77",
                                "charges": "256.78",
                                "other": "0.00",
                                "payment": "315.55",
                                "endingBalance": "781.08"
                            },
                            {
                                "paymentDate": "2022-03-13",
                                "beginningBalance": "781.08",
                                "principal": "99.84",
                                "charges": "215.71",
                                "other": "0.00",
                                "payment": "315.55",
                                "endingBalance": "681.23"
                            },
                            {
                                "paymentDate": "2022-04-13",
                                "beginningBalance": "681.23",
                                "principal": "107.26",
                                "charges": "208.29",
                                "other": "0.00",
                                "payment": "315.55",
                                "endingBalance": "573.97"
                            },
                            {
                                "paymentDate": "2022-05-13",
                                "beginningBalance": "573.97",
                                "principal": "145.72",
                                "charges": "169.83",
                                "other": "0.00",
                                "payment": "315.55",
                                "endingBalance": "428.25"
                            },
                            {
                                "paymentDate": "2022-06-13",
                                "beginningBalance": "428.25",
                                "principal": "184.61",
                                "charges": "130.94",
                                "other": "0.00",
                                "payment": "315.55",
                                "endingBalance": "243.64"
                            },
                            {
                                "paymentDate": "2022-07-13",
                                "beginningBalance": "243.64",
                                "principal": "243.64",
                                "charges": "72.09",
                                "other": "0.00",
                                "payment": "315.74",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "315.55",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "315.55",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "315.55",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "315.55",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "315.55",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "315.55",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "7",
                                    "paymentDate": "2022-02-13",
                                    "paymentAmount": "315.55",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "8",
                                    "paymentDate": "2022-03-13",
                                    "paymentAmount": "315.55",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "9",
                                    "paymentDate": "2022-04-13",
                                    "paymentAmount": "315.55",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "10",
                                    "paymentDate": "2022-05-13",
                                    "paymentAmount": "315.55",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "11",
                                    "paymentDate": "2022-06-13",
                                    "paymentAmount": "315.55",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "12",
                                    "paymentDate": "2022-07-13",
                                    "paymentAmount": "315.74",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 1
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "1100.00",
                    "apr": "364.05",
                    "int_rate": "360.00",
                    "payments": "6",
                    "freq": "Monthly",
                    "payment": "419.23",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "1100.00",
                                "principal": "82.90",
                                "charges": "336.33",
                                "other": "0.00",
                                "payment": "419.23",
                                "endingBalance": "1017.10"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "1017.10",
                                "principal": "108.25",
                                "charges": "310.98",
                                "other": "0.00",
                                "payment": "419.23",
                                "endingBalance": "908.85"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "908.85",
                                "principal": "150.31",
                                "charges": "268.92",
                                "other": "0.00",
                                "payment": "419.23",
                                "endingBalance": "758.54"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "758.54",
                                "principal": "187.30",
                                "charges": "231.93",
                                "other": "0.00",
                                "payment": "419.23",
                                "endingBalance": "571.24"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "571.24",
                                "principal": "250.21",
                                "charges": "169.02",
                                "other": "0.00",
                                "payment": "419.23",
                                "endingBalance": "321.03"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "321.03",
                                "principal": "321.03",
                                "charges": "98.16",
                                "other": "0.00",
                                "payment": "419.19",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "419.23",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "419.23",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "419.23",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "419.23",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "419.23",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "419.19",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 2
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "1100.00",
                    "apr": "362.75",
                    "int_rate": "360.00",
                    "payments": "12",
                    "freq": "Monthly",
                    "payment": "347.11",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "1100.00",
                                "principal": "10.78",
                                "charges": "336.33",
                                "other": "0.00",
                                "payment": "347.11",
                                "endingBalance": "1089.22"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "1089.22",
                                "principal": "14.08",
                                "charges": "333.03",
                                "other": "0.00",
                                "payment": "347.11",
                                "endingBalance": "1075.14"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "1075.14",
                                "principal": "28.99",
                                "charges": "318.12",
                                "other": "0.00",
                                "payment": "347.11",
                                "endingBalance": "1046.16"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "1046.16",
                                "principal": "27.24",
                                "charges": "319.87",
                                "other": "0.00",
                                "payment": "347.11",
                                "endingBalance": "1018.91"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "1018.91",
                                "principal": "45.62",
                                "charges": "301.49",
                                "other": "0.00",
                                "payment": "347.11",
                                "endingBalance": "973.29"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "973.29",
                                "principal": "49.52",
                                "charges": "297.59",
                                "other": "0.00",
                                "payment": "347.11",
                                "endingBalance": "923.76"
                            },
                            {
                                "paymentDate": "2022-02-13",
                                "beginningBalance": "923.76",
                                "principal": "64.67",
                                "charges": "282.44",
                                "other": "0.00",
                                "payment": "347.11",
                                "endingBalance": "859.10"
                            },
                            {
                                "paymentDate": "2022-03-13",
                                "beginningBalance": "859.10",
                                "principal": "109.86",
                                "charges": "237.25",
                                "other": "0.00",
                                "payment": "347.11",
                                "endingBalance": "749.24"
                            },
                            {
                                "paymentDate": "2022-04-13",
                                "beginningBalance": "749.24",
                                "principal": "118.03",
                                "charges": "229.08",
                                "other": "0.00",
                                "payment": "347.11",
                                "endingBalance": "631.21"
                            },
                            {
                                "paymentDate": "2022-05-13",
                                "beginningBalance": "631.21",
                                "principal": "160.34",
                                "charges": "186.77",
                                "other": "0.00",
                                "payment": "347.11",
                                "endingBalance": "470.87"
                            },
                            {
                                "paymentDate": "2022-06-13",
                                "beginningBalance": "470.87",
                                "principal": "203.14",
                                "charges": "143.97",
                                "other": "0.00",
                                "payment": "347.11",
                                "endingBalance": "267.73"
                            },
                            {
                                "paymentDate": "2022-07-13",
                                "beginningBalance": "267.73",
                                "principal": "267.73",
                                "charges": "79.22",
                                "other": "0.00",
                                "payment": "346.94",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "347.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "347.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "347.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "347.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "347.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "347.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "7",
                                    "paymentDate": "2022-02-13",
                                    "paymentAmount": "347.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "8",
                                    "paymentDate": "2022-03-13",
                                    "paymentAmount": "347.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "9",
                                    "paymentDate": "2022-04-13",
                                    "paymentAmount": "347.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "10",
                                    "paymentDate": "2022-05-13",
                                    "paymentAmount": "347.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "11",
                                    "paymentDate": "2022-06-13",
                                    "paymentAmount": "347.11",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "12",
                                    "paymentDate": "2022-07-13",
                                    "paymentAmount": "346.94",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 0,
                    "parent_offer": 1
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "1200.00",
                    "apr": "364.05",
                    "int_rate": "360.00",
                    "payments": "6",
                    "freq": "Monthly",
                    "payment": "457.34",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "1200.00",
                                "principal": "90.44",
                                "charges": "366.90",
                                "other": "0.00",
                                "payment": "457.34",
                                "endingBalance": "1109.56"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "1109.56",
                                "principal": "118.09",
                                "charges": "339.25",
                                "other": "0.00",
                                "payment": "457.34",
                                "endingBalance": "991.48"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "991.48",
                                "principal": "163.97",
                                "charges": "293.37",
                                "other": "0.00",
                                "payment": "457.34",
                                "endingBalance": "827.51"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "827.51",
                                "principal": "204.33",
                                "charges": "253.01",
                                "other": "0.00",
                                "payment": "457.34",
                                "endingBalance": "623.18"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "623.18",
                                "principal": "272.95",
                                "charges": "184.39",
                                "other": "0.00",
                                "payment": "457.34",
                                "endingBalance": "350.23"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "350.23",
                                "principal": "350.23",
                                "charges": "107.08",
                                "other": "0.00",
                                "payment": "457.32",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "457.34",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "457.34",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "457.34",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "457.34",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "457.34",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "457.32",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 2,
                    "parent_offer": 2,
                    "min": 200
                },
                {
                    "product_id": "534",
                    "funding_date": "2021-07-13",
                    "amount": "1200.00",
                    "apr": "362.75",
                    "int_rate": "360.00",
                    "payments": "12",
                    "freq": "Monthly",
                    "payment": "378.66",
                    "payment_schedule": {
                        "payment": [
                            {
                                "paymentDate": "2021-08-13",
                                "beginningBalance": "1200.00",
                                "principal": "11.76",
                                "charges": "366.90",
                                "other": "0.00",
                                "payment": "378.66",
                                "endingBalance": "1188.24"
                            },
                            {
                                "paymentDate": "2021-09-13",
                                "beginningBalance": "1188.24",
                                "principal": "15.35",
                                "charges": "363.31",
                                "other": "0.00",
                                "payment": "378.66",
                                "endingBalance": "1172.89"
                            },
                            {
                                "paymentDate": "2021-10-13",
                                "beginningBalance": "1172.89",
                                "principal": "31.61",
                                "charges": "347.05",
                                "other": "0.00",
                                "payment": "378.66",
                                "endingBalance": "1141.28"
                            },
                            {
                                "paymentDate": "2021-11-13",
                                "beginningBalance": "1141.28",
                                "principal": "29.71",
                                "charges": "348.95",
                                "other": "0.00",
                                "payment": "378.66",
                                "endingBalance": "1111.57"
                            },
                            {
                                "paymentDate": "2021-12-13",
                                "beginningBalance": "1111.57",
                                "principal": "49.76",
                                "charges": "328.90",
                                "other": "0.00",
                                "payment": "378.66",
                                "endingBalance": "1061.82"
                            },
                            {
                                "paymentDate": "2022-01-13",
                                "beginningBalance": "1061.82",
                                "principal": "54.01",
                                "charges": "324.65",
                                "other": "0.00",
                                "payment": "378.66",
                                "endingBalance": "1007.81"
                            },
                            {
                                "paymentDate": "2022-02-13",
                                "beginningBalance": "1007.81",
                                "principal": "70.52",
                                "charges": "308.14",
                                "other": "0.00",
                                "payment": "378.66",
                                "endingBalance": "937.29"
                            },
                            {
                                "paymentDate": "2022-03-13",
                                "beginningBalance": "937.29",
                                "principal": "119.81",
                                "charges": "258.85",
                                "other": "0.00",
                                "payment": "378.66",
                                "endingBalance": "817.48"
                            },
                            {
                                "paymentDate": "2022-04-13",
                                "beginningBalance": "817.48",
                                "principal": "128.71",
                                "charges": "249.95",
                                "other": "0.00",
                                "payment": "378.66",
                                "endingBalance": "688.77"
                            },
                            {
                                "paymentDate": "2022-05-13",
                                "beginningBalance": "688.77",
                                "principal": "174.86",
                                "charges": "203.80",
                                "other": "0.00",
                                "payment": "378.66",
                                "endingBalance": "513.90"
                            },
                            {
                                "paymentDate": "2022-06-13",
                                "beginningBalance": "513.90",
                                "principal": "221.53",
                                "charges": "157.13",
                                "other": "0.00",
                                "payment": "378.66",
                                "endingBalance": "292.37"
                            },
                            {
                                "paymentDate": "2022-07-13",
                                "beginningBalance": "292.37",
                                "principal": "292.37",
                                "charges": "86.51",
                                "other": "0.00",
                                "payment": "378.88",
                                "endingBalance": "0.00"
                            }
                        ]
                    },
                    "eft_schedule": {
                        "scheduleType": "Contractual",
                        "schedule": {
                            "installment": [
                                {
                                    "paymentNumber": "1",
                                    "paymentDate": "2021-08-13",
                                    "paymentAmount": "378.66",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "2",
                                    "paymentDate": "2021-09-13",
                                    "paymentAmount": "378.66",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "3",
                                    "paymentDate": "2021-10-13",
                                    "paymentAmount": "378.66",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "4",
                                    "paymentDate": "2021-11-13",
                                    "paymentAmount": "378.66",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "5",
                                    "paymentDate": "2021-12-13",
                                    "paymentAmount": "378.66",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "6",
                                    "paymentDate": "2022-01-13",
                                    "paymentAmount": "378.66",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "7",
                                    "paymentDate": "2022-02-13",
                                    "paymentAmount": "378.66",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "8",
                                    "paymentDate": "2022-03-13",
                                    "paymentAmount": "378.66",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "9",
                                    "paymentDate": "2022-04-13",
                                    "paymentAmount": "378.66",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "10",
                                    "paymentDate": "2022-05-13",
                                    "paymentAmount": "378.66",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "11",
                                    "paymentDate": "2022-06-13",
                                    "paymentAmount": "378.66",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                },
                                {
                                    "paymentNumber": "12",
                                    "paymentDate": "2022-07-13",
                                    "paymentAmount": "378.88",
                                    "revisedDate": [],
                                    "revisedAmount": [],
                                    "eftStatus": []
                                }
                            ]
                        }
                    },
                    "dec": 1,
                    "parent_offer": 1,
                    "min": 200
                }
            ]
        }
    }
    eftSchedule(response);
}