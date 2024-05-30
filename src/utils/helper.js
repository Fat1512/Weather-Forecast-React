// export function foert
export function getFullDate(date) {
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
}

export function getWeekDay(date) {
  let options = {
    weekday: 'long',
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
}

export function getMonthDay(date) {
  let options = {
    month: 'long',
    day: 'numeric',
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
}

/**
 *
 * @param {*} time: timestamp format
 * @returns
 */
export function getTimeBasedOnTimestamp(time) {
  let options = {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  return new Intl.DateTimeFormat('en-US', options).format(
    new Date(time * 1000),
  );
}

export function getTimeBasedOnDatetime(time) {
  let options = {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(time));
}
