import React from "react"
import { LoadingRow } from "../Table.LoadingRow"
import * as mocks from "../Table.mocks"

export default {
  title: "views/Example/Table/Table.LoadingRow",
  component: LoadingRow,
}

export const Default = () => (
  <table cellSpacing="0" cellPadding="0" style={{ width: '100%' }}>
    <tbody>
      <LoadingRow />
    </tbody>
  </table>
)
