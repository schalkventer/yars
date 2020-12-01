import React, { FC, useState, useRef } from "react"
import { useDebounce, useToggle, useUpdateEffect } from "react-use"

import * as viewTypes from "../types"
import * as types from "./Options.types"
import { Presentation } from "./Options.Presentation"
import { INITIAL_STATE } from "./Options.constants"

/**
 * @name Options
 *
 * @description A component that allows a user to control the conditions that
 * are passed to the server and subsequently influencing the resulting rows that
 * are returned to the table.
 *
 * Whenever a user changes the selected options a  the `onChange` callback will
 * be fired. This callback can be used to refetch new information from the
 * server. Note that this, callback is debounced by two seconds. This means that
 * it will only fire if a period of two seconds passed since the last selection
 * was made. This allows requests to be batched if they made within 2 seconds of
 * one another.
 */
export const Options: FC<types.Props> = props => {
  const { onExport, onUpdate } = props

  const [phase, setPhase] = useState<types.phase>(INITIAL_STATE.phase)
  const [isLoading, toggleLoading] = useToggle(INITIAL_STATE.isLoading)
  const [search, setSearch] = useState<string>(INITIAL_STATE.search)

  const [status, setStatus] = useState<types.StatusObj>(
    INITIAL_STATE.filters.status
  )

  const [stock, setStock] = useState<types.StockObj>(
    INITIAL_STATE.filters.stock
  )

  const [direction, setDirection] = useState<viewTypes.direction>(
    INITIAL_STATE.sorting.direction
  )

  const [column, setColumn] = useState<viewTypes.columnKey>(
    INITIAL_STATE.sorting.column
  )

  /**
   * @name updateStatus
   *
   * @description TODO Add description
   */
  const updateStatus = (newValue: types.statusOptions) => {
    console.log(newValue)

    if (newValue === "all") {
      setStatus(INITIAL_STATE.filters.status)
      return
    }

    if (status.all) {
      setStatus({
        ...status,
        [newValue]: !status[newValue],
        all: false,
      })

      return
    }

    setStatus({
      ...status,
      [newValue]: !status[newValue],
    })
  }

  /**
   * @name updateStock
   *
   * @description TODO: Add description
   */
  const updateStock = (newValue: types.stockOptions) => {
    if (newValue === "all") {
      setStock(INITIAL_STATE.filters.stock)
      return
    }

    if (stock.all) {
      setStock({
        ...stock,
        [newValue]: !stock[newValue],
        all: false,
      })

      return
    }

    setStock({
      ...stock,
      [newValue]: !stock[newValue],
    })
  }

  const actions: types.Actions = {
    updateStatus,
    updateStock,
    exportData: onExport || null,
    updateColumn: setColumn,
    updateDirection: setDirection,
    updatePhase: setPhase,
    updateSearch: setSearch,
  }

  const filters: {
    status: types.StatusObj
    stock: types.StockObj
  } = {
    status,
    stock,
  }

  const sorting: {
    direction: viewTypes.direction
    column: viewTypes.columnKey
  } = {
    direction,
    column,
  }

  
  const prevOptions = useRef<types.OptionsWithAll>({
    filters,
    sorting,
    search,
  })

  /**
   * TODO: Add description
   */
  useUpdateEffect(() => {
    if (!isLoading) {
      toggleLoading(true)
    }
  }, [search, status, stock, direction, column])

  /**
   * TODO: Add description
   */
  useDebounce(
    () => {
      toggleLoading(false)

      const newOptions: types.OptionsWithAll = {
        filters,
        sorting,
        search,
      }

      const isPrev =
        JSON.stringify(prevOptions.current) === JSON.stringify(newOptions)

      if (isPrev) return
      prevOptions.current = newOptions;

      if (onUpdate) {
        onUpdate(newOptions)
      }
    },
    2000,
    [search, status, stock, direction, column]
  )

  return (
    <Presentation
      phase={phase}
      isLoading={isLoading}
      search={search}
      filters={filters}
      sorting={sorting}
      actions={actions}
    />
  )
}

export default Options
