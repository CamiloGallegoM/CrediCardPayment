

export const formatCurrency = (  amount: number, currency: string = 'USD',  locale: string = 'en-IN'): string => {
    if (isNaN(amount)) {
        throw new Error('Invalid amount. Please provide a valid number.');
    }

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
    }).format(amount);
};