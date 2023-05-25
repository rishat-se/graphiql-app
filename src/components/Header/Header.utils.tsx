export function firstLetterToUpperCase<T>(str: T) {
  if (typeof str === 'string') {
    return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
  } else {
    return str;
  }
}
