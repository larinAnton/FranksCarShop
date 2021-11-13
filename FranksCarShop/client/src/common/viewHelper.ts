const DEFAULT_CULTURE = 'en-US';

export const showPrice = (price: number, culture = DEFAULT_CULTURE, currency = 'USD'): string => {
    const formatter = new Intl.NumberFormat(culture, {
        style: 'currency',
        currency,
    });

    return formatter.format(price);
};

export const showYear = (dateTime: string) => {
    return (new Date(dateTime)).getFullYear();
};

export const showDateOnly = (dateTime: string, culture = DEFAULT_CULTURE) => {
    return (new Date(dateTime)).toLocaleDateString(culture);
};
