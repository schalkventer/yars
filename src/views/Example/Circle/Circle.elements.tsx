import { getLuminance } from "polished"
import { Chip, Tooltip } from "@material-ui/core"
import styled from "styled-components"

export const CircleBase = styled(Chip)<{ custom: string }>`
  && {
    display: inline-flex;
    width: 32px;
    height: 32px;
    background: ${({ custom }): string => custom || "#CCC"};

    color: ${({ custom }): string =>
      getLuminance(custom) < 0.6 ? "white" : "black"};

    & .MuiChip-label {
      overflow: visible;
    }
  }
`

export const Tip = styled(Tooltip)`
  && {
    cursor: help;
  }
`
