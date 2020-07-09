/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from 'axios';

import { getInitialData } from '../../helpers';
import { mocks } from '..';

jest.mock('axios');

const mockedAxios = axios as any;

describe('app', () => {
  describe('connectors', () => {
    describe('ListingDetails', () => {
      describe('helpers', () => {
        describe('getInitialData', () => {
          test('success', async () => {
            mockedAxios.get.mockResolvedValue(mocks.SERVER_SUCCESS_RESPONSE);
            const result = await getInitialData('mocked-token');

            await expect({
              ...result,
              id: null,
            }).toEqual({
              id: null,
              placeholder: true,
            });
          });

          test('fail', async () => {
            mockedAxios.get.mockResolvedValue(mocks.SERVER_FAILS_RESPONSE);
            await expect(getInitialData('mocked-token')).rejects.toThrow(Error);
          });
        });
      });
    });
  });
});
