import { DateTime } from "luxon";

let now = DateTime.now();

let end = DateTime.fromISO('2016-05-25T09:08:34.123');

now = now.set({year : 2030});

console.log(end);