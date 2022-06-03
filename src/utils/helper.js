export function countDiscout(price, discount) {
    return Math.round(price - (price * discount/100));
};
