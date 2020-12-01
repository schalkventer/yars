import React, { FC, useContext, useState } from 'react';
import { useMount } from 'react-use';

import * as types from './Table.types';
import { context } from '@/api/example';
import { Presentation } from './Table.Presentation'
import { transformPosts } from './Table.transformPosts';

/**
 * @name Table
 *
 * @description TODO: Add description
 */
export const Table: FC<types.Props> = (props) => {
  const { getRows } = useContext(context);
  const {} = props;

  const [rows, setRows] = useState([]);

  const updateRows = async () => {
    const response = await getRows();
    console.log(response)
  }

  useMount(updateRows)

  const actions: types.Actions = {

  }

  return <Presentation phase="recreating" actions={actions} rows={[]} />
}

export default Table;
