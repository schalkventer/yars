import React from "react"
import { context } from "@/api/example"
import { API } from "@/api/example/__tests__/example.mocks"
import { createAsyncMock } from '@/utilities/createAsyncMock'
import { {{pascalCase name}} } from "../{{pascalCase name}}"

export default {
  title: "views/{{ $viewName }}/{{pascalCase name}}/{{pascalCase name}}",
  component: {{pascalCase name}},
}

export const Default = () => (
  <context.Provider value={API}>
    <{{pascalCase name}} />
  </context.Provider>
)

const errorApi = {
    ...API,
    getPosts: createAsyncMock(new Error()),
}

export const WithError = () => (
  <context.Provider value={errorApi}>
    <{{pascalCase name}} />
  </context.Provider>
)
