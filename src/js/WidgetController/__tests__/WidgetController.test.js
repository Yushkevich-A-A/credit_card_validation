import WidgetController from "../WidgetController"

const widget = new WidgetController();

test('test function of validate cards with correct value', () => {

  let value = 30569309025904;

  let result = widget.checkValidity(value);

  expect(result).toBeTruthy();
});

test('test function of validate cards with incorrect value', () => {

  let value = '3056ddd02590';

  let result = widget.checkValidity(value);

  expect(result).toBeFalsy();
});

test('checking whether the card belongs to the payment system with correct value', () => {

  let value1 =   {
    name: 'discover',
    value: 6011111111111117,
  }
  let value2 =   {
    name: 'master',
    value: 5555555555554444,
  }

  let result1 = widget.belongToCreditSystem(value1.value);
  let result2 = widget.belongToCreditSystem(value2.value);

  expect(result1).toBe(value1.name);
  expect(result2).toBe(value2.name);
});

test('checking whether the card belongs to the payment system with value of an unknown payment system', () => {

  let value =   {
    name: 'discover',
    value: 90111111117,
  }

  let result = widget.belongToCreditSystem(value.value);

  expect(result).toBeNull();
});