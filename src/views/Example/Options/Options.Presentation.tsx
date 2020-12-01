import React, { FC, useState, ChangeEvent } from "react"
import styled from "styled-components"
import { CloudDownload } from "@material-ui/icons"
import { Button, LinearProgress, TextField, Popover } from "@material-ui/core"

import * as types from "./Options.types"
import { Filters } from "./Options.Presentation.Filters"
import { Sorting } from "./Options.Presentation.Sorting"

const Base = styled.div`
  padding: 1rem 2rem;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
`

const Controls = styled.div`
  display: flex;
`

const ExportButton = styled(Button)`
  && {
    margin-left: auto;
    margin-top: 0.5rem;
    background: #222;
    color: white;

    &:hover {
      background: black;
    }
  }
`

const ButtonWrap = styled.div`
  && {
    margin-top: 0.4rem;
    margin-left: 1rem;
  }
`

const Loader = styled(LinearProgress)`
  && {
    color: #222;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
  }
`

const StyledPopover = styled(Popover)`
  && .MuiPopover-paper {
    max-width: 600px;
    width: 100%;
  }
`

/**
 * @name Export
 *
 * @description TODO Add description
 */
const Export: FC<{ onExport: () => void }> = props => {
  const { onExport } = props

  return (
    <ExportButton
      size="large"
      variant="contained"
      onClick={onExport}
      endIcon={<CloudDownload />}
    >
      Export
    </ExportButton>
  )
}

/**
 * @name FiltersWrap
 *
 * @description TODO Add description
 */
const FiltersWrap: FC<{
  open: boolean
  filters: types.FiltersWithAll
  actions: types.Actions
}> = props => {
  const { open, filters, actions } = props
  const [ref, setRef] = useState<HTMLButtonElement | null>(null)

  const handleClose = () => actions.updatePhase("resting");
  const handleClick = () => actions.updatePhase("filtering");

  const handleRef = (node: HTMLButtonElement) => {
    if (!!ref || !node) return
    setRef(node)
  }

  return (
    <ButtonWrap>
      <Button variant="contained" size="large" ref={handleRef} onClick={handleClick}>
        Filtering
      </Button>

      {!!ref && (
        <StyledPopover open={open} anchorEl={ref} onClose={handleClose}>
          <Filters {...filters} actions={actions} />
        </StyledPopover>
      )}
    </ButtonWrap>
  )
}

/**
 * @name SortingWrap
 *
 * @description TODO Add description
 */
const SortingWrap: FC<{
  open: boolean
  sorting: types.SortingWithAll
  actions: types.Actions
}> = props => {
  const { open, sorting, actions } = props
  const [ref, setRef] = useState<HTMLButtonElement | null>(null)

  const handleClose = () => actions.updatePhase("resting")
  const handleClick = () => actions.updatePhase("sorting");

  const handleRef = (node: HTMLButtonElement) => {
    if (!!ref || !node) return
    setRef(node)
  }

  return (
    <ButtonWrap>
      <Button variant="contained" size="large" ref={handleRef} onClick={handleClick}>
        Sorting
      </Button>

      {!!ref && (
        <StyledPopover open={open} anchorEl={ref} onClose={handleClose}>
          <Sorting {...sorting} actions={actions} />
        </StyledPopover>
      )}
    </ButtonWrap>
  )
}

/**
 * @name Presentation
 *
 * TODO: Add description
 */
export const Presentation: FC<
  types.State & { actions: types.Actions }
> = props => {
  const { actions, sorting, filters, phase, search, isLoading } = props
  const handleSearch = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => actions.updateSearch(value);

  return (
    <Base>
      <Controls>
        <TextField
          variant="outlined"
          value={search}
          onChange={handleSearch}
          label="Search"
          helperText="Find by title, offer ID, product ID, GTIN, TSIN or SKU"
        />

        <FiltersWrap
          open={phase === "filtering"}
          filters={filters}
          actions={actions}
        />

        <SortingWrap
          open={phase === "sorting"}
          sorting={sorting}
          actions={actions}
        />
      </Controls>

      {!!actions.exportData && <Export onExport={actions.exportData} />}
      {isLoading && <Loader />}
    </Base>
  )
}

export default Presentation
