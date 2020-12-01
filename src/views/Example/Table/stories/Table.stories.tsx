import React from 'react';
import { Table } from '../Table';
import * as mocks from '../Table.mocks';

export default {
  title: 'views/Example/Table/Table',
  component: Table,
}

export const Default = () =>  <Table {...mocks.STATE} actions={mocks.ACTIONS} />
export const NoData = () =>  <Table {...mocks.STATE} actions={mocks.ACTIONS} rows={[]} />
export const Loading = () =>  <Table {...mocks.STATE} actions={mocks.ACTIONS} phase="recreating" />
export const Adding = () =>  <Table {...mocks.STATE} actions={mocks.ACTIONS} phase="adding" />
