import React from "react"
import { context } from "@/api/example"
import { API } from "@/api/example/example.mocks"
import { TrackingList } from "../TrackingList"

export default {
  title: "views/Example/TrackingList/TrackingList",
  component: TrackingList,
}

export const Default = () => (
  <context.Provider value={API}>
    <TrackingList />
  </context.Provider>
)
