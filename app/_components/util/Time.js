const longMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const shortMonthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const convDate = (n) => {
  let d = new Date(n);

  return `${d.getDate() > 10 ? d.getDate() : `0${d.getDate()}`} ${
    shortMonthNames[d.getMonth()]
  } ${d.getFullYear()}`;
};

const convTime = (n) => {
  let d = new Date(n);
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();

  // Format hours, minutes, and seconds to be always two digits
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${hours}:${minutes}:${seconds}`;
};

const convDate2 = (n) => {
  let d = new Date(n);

  return `${d.getFullYear()}-${toFullNo(d.getMonth() + 1)}-${toFullNo(
    d.getDate()
  )}`;
};

const convDate3 = (n) => {
  let d = new Date(n);
  return `${Days[d.getDay()]}, ${d.getDate()} ${
    longMonths[d.getMonth()]
  }, ${d.getFullYear()}`;
};

const convDateTime4 = (n) => {
  let d = new Date(n);
  let dmy = d.toDateString().replace(/\s+/, ", ");
  let t = d.toLocaleTimeString().replace(/:\d+ /, " ");
  return `${dmy}, ${t}`;
};

const toFullNo = (n) => {
  if (parseInt(n) < 10) {
    return `0${n}`;
  }
  return n;
};

const toTimeStamp = (d) => {
  const date = new Date(d);
  return date.getTime();
};

function getDateForDayOfWeek(dayOfWeek) {
  const today = new Date();
  const currentDayOfWeek = today.getDay();

  const targetDayIndex = Days.indexOf(dayOfWeek);
  if (targetDayIndex === -1) {
    throw new Error("Invalid day of the week provided.");
  }

  const daysDiff =
    targetDayIndex >= currentDayOfWeek
      ? targetDayIndex - currentDayOfWeek
      : 7 - (currentDayOfWeek - targetDayIndex);

  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + daysDiff);

  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = targetDate.toLocaleDateString(undefined, options);

  return formattedDate;
}

export {
  convDate,
  convDate2,
  convDate3,
  convTime,
  convDateTime4,
  toTimeStamp,
  shortMonthNames,
  Days,
  getDateForDayOfWeek,
};
