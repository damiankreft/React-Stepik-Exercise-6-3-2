export const getHours = (time) => Math.floor(time / 360_000);

export const getMinutes = (time) => Math.floor((time % 360_000) / 6_000);

export const getSeconds = (time) => Math.floor((time % 6_000) / 100);

export const getMilliseconds = (time) => time % 100;
