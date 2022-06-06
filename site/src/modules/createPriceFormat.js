export default function createPriceFormat(number) {
  return new Intl.NumberFormat('ru-RU').format(number);
}
