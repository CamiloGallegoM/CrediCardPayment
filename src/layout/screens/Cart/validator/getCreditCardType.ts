
type CardType = 'visa' | 'mastercard' | 'unknown';

export const getCardType=(number: string): CardType => {
    if (/^4/.test(number)) {
      return 'visa';
    }
    if (/^5[1-5]/.test(number)) {
      return 'mastercard';
    }
    return 'unknown';
}