import {timeFormat,timeParse} from 'd3-time-format';

export const headerDict = {
    "icon":"",
    "bill-id":"Bill",
    "name":"",
    "last_move":"Last update",
    "current_status":"Status",
    "pass-fail":"Status",
    "category":"Issue",
};

export const passFailDict = {
    "pass":"check",
    "fail":"times",
    "waiting":"exclamation-triangle",
};

export const billNbDict = (d) => {
    return d === 'N/A' ? '' : d;
};

export const statusDict = {
    "In committee":"committee",
    "Awaiting floor vote":"vote",
    "In conference committee":"vote",
    "On governor's desk":"sign",
    "Failed floor vote":"fail",
    "Governor signed":"pass",
    "Governor vetoed":"veto",
    "Enacted without Governor's signature":"pass",
    "Awaiting override vote":"veto",
    "Veto overridden":"pass",
    "Veto upheld":"fail",
    "Approved, held for next biennium":"held",
    "Approved second time, awaiting public vote":"held",
    "Amendment passed":"pass"
};

export const parseDate = timeParse('%m/%d/%Y');
const formatTime = timeFormat('%a, %b %d');

export const formatDate = (d) => {
    const isDate = Object.prototype.toString.call(d) === '[object Date]';
    return isDate ? formatTime(d) : "";
};
