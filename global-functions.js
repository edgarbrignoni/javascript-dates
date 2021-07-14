const sanitizeData = (request) => {
    let data = JSON.stringify(request);
    let sanitize = data.replace(/\u2018|\u2019|\u201A|\uFFFD/g, "'");
    response = JSON.parse(sanitize);
    return response;
};

const dateDiff = (string1, string2) => {
    const date1 = new Date(string1);
    const date2 = new Date(string2);

    const datediff = date1 - date2;
    return datediff / (1000 * 3600 * 24);
};

const stringToDate = (string) => {
    return new Date(string);
}

const dashToSlashDateString = (string) => {
    let arr = string.split('-');
    return `${arr[1]}/${arr[2]}/${arr[0]}`;
};

const convertToDashDateObject = (obj) => {
    return obj.toLocaleDateString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
};

const getDayOfWeek = (string) => {
    let splitDate = string.split('-');
    year = splitDate[0];
    month = (splitDate[1] - 1);
    day = splitDate[2];
    dateNow = new Date(year, month, day);
    return new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(dateNow);
}