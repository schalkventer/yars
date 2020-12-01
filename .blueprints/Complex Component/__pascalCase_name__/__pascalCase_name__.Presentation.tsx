import React, { FC } from "react"
import { Skeleton } from '@material-ui/lab';
import { Button } from "@material-ui/core"
import styled from "styled-components"

import * as types from "./{{pascalCase name}}.types"
import { Post } from "./{{pascalCase name}}.Presentation.Post"

const List = styled.ul`
  width: 100%;
  max-width: 60rem;
  margin: 0;
`

const Item = styled.li`
  padding: 0.5rem;
  margin: 0;
  list-style: none;
  display: block;
`

const Base = styled.div`
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

const Placeholder = styled(Skeleton)`
  display: block;
  transform: scale(1);
  height: 15rem;
`

/**
 * @name Loading
 *
 * @description TODO: Add description
 */
const Loading = () => (
  <List>
    <Item>
      <div>
        <Placeholder />
      </div>
    </Item>

    <Item>
    <div>
        <Placeholder />
      </div>
    </Item>

    <Item>
    <div>
        <Placeholder />
      </div>
    </Item>
  </List>
)


/**
 * @name Presentation
 *
 * @description TODO: Add description
 */
export const Presentation: FC<
  types.State & { actions: types.Actions }
> = props => {
  const { phase, actions, posts } = props

  if (phase === "loading") {
    return (
      <Base>
        <Button disabled variant="contained">Load Again</Button>
        <Loading />
      </Base>
    )
  }

  if (phase === "error") {
    return (
      <Base>
        <Button variant="contained" onClick={actions.updatePosts}>Load Again</Button>
        <p>Something went wrong!</p>
      </Base>
    )
  }

  return (
    <Base>
      <Button variant="contained" onClick={actions.updatePosts}>Load Again</Button>

      <List>
        {posts.map(item => (
          <Item key={item.id}>
            <Post {...item} />
          </Item>
        ))}
      </List>
    </Base>
  )
}

export default Presentation
