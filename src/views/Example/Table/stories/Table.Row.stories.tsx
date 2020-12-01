import React from "react"
import { Row } from "../Table.Row"
import * as mocks from "../Table.mocks"

export default {
  title: "views/Example/Table/Table.Row",
  component: Row,
}

export const Default = () => (
  <table cellSpacing="0" cellPadding="0" style={{ width: '100%' }}>
    <tbody>
      <Row {...mocks.SINGLE_ROW} />
    </tbody>
  </table>
)
