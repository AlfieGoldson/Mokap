export const hasOwnProperty = <X extends Record<PropertyKey, unknown>, Y extends PropertyKey>(
    obj: X,
    prop: Y,
): obj is X & Record<Y, unknown> => {
    return Object.prototype.hasOwnProperty.call(obj, prop);
};
