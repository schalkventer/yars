import React, { FC, useContext, useState } from "react"
import { useMount, useToggle, useCounter } from "react-use"

import * as types from "./TrackingList.types"
import * as viewTypes from "../types"
import { context } from "@/api/example"
import { Presentation } from "./TrackingList.Presentation"
import { transformResponse } from "./TrackingList.transformPosts"

/**
 * @name TrackingList
 *
 * @description TODO: Add description
 */
export const TrackingList: FC<types.Props> = () => {
  const { getProducts } = useContext(context)

  const [phase, setPhase] = useState<viewTypes.phase>("recreating")
  const [page, pageActions] = useCounter(1)
  const [hasMore, toggleHasMore] = useToggle(false)

  const [modal, setModal] = useState<viewTypes.Product | null>(null)
  const [rows, setRows] = useState<viewTypes.Product[]>([])

  /**
   * @name updateData
   *
   * @description TODO Add description
   */
  const updateRows = async () => {
    const response = await getProducts({
      descending: true,
      page,
      search: "",
      sortingColumn: "title",
      status: {
        Active: true,
        Archived: true,
        Disabled: true,
        Inactive: true,
      },
      stock_status: {
        low_stock: true,
        out_of_stock: true,
        sufficient_stock: true,
      },
    })

    if (response instanceof Error) {
      return
    }

    const transformedResponse = transformResponse(response)
    setRows(transformedResponse.rows)
    toggleHasMore(transformedResponse)
    setPhase("resting")
  }

  /**
   * @name openModal
   *
   * @description TODO Add description
   */
  const openModal = (id: string) => {
    const result = rows.find((item) => item.id === id);

    if (!result) {
      throw new Error('No matching product found');
    }

    setModal(result);
  }

  /**
   * @name showMore
   *
   * @description TODO Add description
   */
  const showMore = () => {
    pageActions.inc()
  }

  /**
   * @name changeOptions
   *
   * @description TODO Add description
   */
  const changeOptions = async (newValues: viewTypes.Options) => {
    console.log("Fired!")
  }

  /**
   * TODO: Add description
   */
  useMount(updateRows)

  /**
   * @name actions
   *
   * @description TODO: Add description
   */
  const actions: types.Actions = {
    showMore,
    changeOptions,
    openModal,
  }

  return (
    <Presentation
      rows={rows}
      hasMore={hasMore}
      phase={phase}
      actions={actions}
      modal={modal}
    />
  )
}

export default TrackingList
