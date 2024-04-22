const small = 500;
const medium = 900;
const large = 1200;

export const smallOnly = `(max-width: ${small}px)`;

export const mediumDown = `(max-width: ${large}px)`;
export const mediumOnly = `(min-width: ${small}px) and (max-width: ${large}px)`;
export const mediumUp = `(min-width: ${small}px)`;

export const largeOnly = `(min-width: ${medium}px)`;
