export default (number: number) => {
    const intl = new Intl.NumberFormat("id", {
        style: "currency",
        currency: "IDR",
    });
    return intl.format(number);
};
