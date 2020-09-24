import getTitle from './selectors';

describe('Selector', () => {
  test('getTitle must return a title', () => {
    expect(getTitle({ data: { title: 'Some Title!' } })).toBe('Some Title!');
  });
});
