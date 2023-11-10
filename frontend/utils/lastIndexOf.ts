export default function <T>(
    array: Array<T>,
    predicate: (value: T, index: number, obj: T[]) => boolean
) {
    let l = array.length;
    while (l--) {
        if (predicate(array[l], l, array)) return l;
    }
    return -1;
}
