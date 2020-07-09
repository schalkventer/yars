import axios from 'axios';
import { v4 as createId } from 'uuid';
import { types } from '..';
import { types as viewsTypes } from '../../../../ui/views';

/**
 * @name mapDataResponseToUi
 *
 * @description TODO Add description
 */
const mapDataResponseToUi = (response: types.Data): viewsTypes.Homepage.InitialData => {
  return {
    placeholder: response.example,
    id: createId(),
  };
};

/**
 * @name getInitialData
 *
 * @description TODO Add description
 */
export const getInitialData = async (token: string): Promise<viewsTypes.Homepage.InitialData> => {
  const response = await axios.get<types.Data>(`${process.env.DATA_API}/example`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    throw new Error('The server request failed, it is possible that the server is down');
  }

  if (!response || !response.data) {
    throw new Error(
      'The server returned unexpected data, it is possible that the access token is incorrect.',
    );
  }

  return mapDataResponseToUi(response.data);
};
