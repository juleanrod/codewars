/*
DESCRIPTION:
In this Kata, you will be given a series of times at which an alarm goes off.
Your task will be to determine the maximum time interval between alarms.
Each alarm starts ringing at the beginning of the corresponding minute and
rings for exactly one minute. The times in the array are not in chronological
order. Ignore duplicate times, if any.

For example:
solve(["14:51"]) = "23:59". If the alarm goes off now, it will not go off for
another 23 hours and 59 minutes.
solve(["23:00","04:22","18:05","06:24"]) == "11:40". The max interval that the
alarm will not go off is 11 hours and 40 minutes.
In the second example, the alarm goes off 4 times in a day.

More examples in test cases. Good luck!
*/

var findInArray = function(arr, iterator) {
    for(let i = 0; i < arr.length; i++) {
        if(iterator(arr[i], i)) {
            return i;
        };
    }

    return -1;
};

function getMinutes(time) {
    const [h, m] = time.split(":");
    return Number(h) * 60 + Number(m);
}

function getTime(minutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h > 9 ? h : "0" + h}:${m > 9 ? m : "0" + m}`;
}

function solve(arr) {
    const minutes = [];
    for (let i = 0; i < arr.length; i++) {
        minutes.push(getMinutes(arr[i]));
    }

    minutes.sort((a, b) => a - b);

    const intervals = [];
    for (let i = 1; i < minutes.length; i++) {
        intervals.push(minutes[i] - minutes[i - 1] - 1);
    }

    const DAY_IN_MINUTES = 24 * 60;
    intervals.unshift(
        minutes[0] + DAY_IN_MINUTES - minutes[minutes.length - 1] - 1
    );

    const maxMinutes = Math.max(...intervals);
    return getTime(maxMinutes);
}

//Time to complete: 39min
