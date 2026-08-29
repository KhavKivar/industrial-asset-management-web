import API from './api';

test('uses a local API URL by default', () => {
  expect(API.baseURL).toBe('http://localhost:3000');
});
