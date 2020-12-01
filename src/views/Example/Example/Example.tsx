import React, { FC } from 'react';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import * as types from './Example.types'

const Base = styled(Paper)`
  display: flex;
`

/**
 * @name Example
 *
 * @description TODO Add description
 */
export const Example: FC<types.Props> = props => {
  const { value, children } = props

  return (
    <Base>
      <div>{children}</div>
      <div>{value}</div>
    </Base>
  )
}

export default Example










// import React from 'react'
// import styled, { createGlobalStyle } from 'styled-components'
// import { Alert } from '@material-ui/lab'
// import { Paper } from '@material-ui/core'

// import { Modal } from './TrackingTable.Presentation.Modal';
// import { Options } from './TrackingTable.Presentation.Options';
// import { Table } from './TrackingTable.Presentation.Table';
// import { Notice } from './TrackingTable.Presentation.Notice';

// const Base = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   padding: 2rem 0;
// `

// // const ButtonWrap = styled.div`
// //   display: flex;
// //   padding: 2rem;
// //   align-items: center;
// //   justify-content: center;
// // `

// const GlobalStyles = createGlobalStyle`
//   body {
//     overflow-y: scroll;
//   }
// `

// /**
//  * @name Presentation
//  *
//  * @description TODO Add description
//  *
//  * @param {import('./TrackingTable.types').PresentationProps} props
//  */
// export const Presentation = (props) => {
//   const { notice, modal, options, table } = props

//   return (
//     <>
//       <GlobalStyles />
//       <Notice {...notice} />
//       {!!modal && <Modal {...modal} />}

//       <Base>
//         <Paper>
//             <Options {...options} />
//             <Table {...table} />
//         </Paper>

//         {/* {!!rows.hasMore && (
//           <ButtonWrap>
//             <MuiButton onClick={rows.onLoadMore} variant='contained' disabled={!!rows.loading}>
//               {rows.loading ? 'Fetching items...' : 'Show more'}
//             </MuiButton>
//           </ButtonWrap>
//         )} */}
//       </Base>
//     </>
//   )
// }

// export default Presentation




// import React from 'react'
// import styled from 'styled-components'
// import { Snackbar, Slide, CircularProgress } from '@material-ui/core'
// import { Alert } from '@material-ui/lab'

// const Saving = styled(Alert)`
//   && {
//     box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
//   }
// `

// export const Notice = (props) => {
//   const { active } = props

//   return (
//     <Snackbar
//       open={active}
//       TransitionComponent={Slide}
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'right',
//       }}
//     >
//       <Saving severity='info' icon={<CircularProgress size={20} />}>
//         Saving
//       </Saving>
//     </Snackbar>
//   )
// }

// export default Notice




// import React from 'react'
// import styled from 'styled-components'
// import { Tooltip, Chip } from '@material-ui/core'
// import { Check } from '@material-ui/icons'
// import { getLuminance, tint } from 'polished'

// import {
//   STATUS_KEYS_LETTERS_MAP,
//   STOCK_LEVEL_LETTERS_MAP,
//   STATUS_KEYS_COLOR_MAP,
//   STOCK_LEVEL_COLOR_MAP,
// } from './TrackingTable.constants'


// const Base = styled(Chip)`
//   && {
//     display: inline-flex;
//     background: ${({ custom }) => custom || '#CCC'};
//     color: ${({ custom }) => (getLuminance(custom) < 0.6 ? 'white' : 'black')};
//     width: 32px;
//     height: 32px;

//     & .MuiChip-label {
//       overflow: visible;
//     }
//   }
// `

// const Trophy = styled.div`
//   opacity: 0.5;
//   border: 1px solid grey;
//   width: 32px;
//   height: 32px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto;
// `

// const Tip = styled(Tooltip)`
//   && {
//     cursor: help;
//   }
// `

// /**
//  * @name Row
//  *
//  * @description TODO Add description
//  */
// export const Circle = (props) => {
//   const { variant, value, tooltip } = props

//   if (variant === 'winner' && tooltip) {
//     return (
//       <Tip title="You are the winner" placement='right'>
//         <Trophy>
//             <Check />
//         </Trophy>
//       </Tip>
//     )
//   }

//   if (variant === 'winner') {
//       return (
//         <Trophy>
//             <Check />
//         </Trophy>
//       )
//   }

//   if (variant === 'stock' && !!tooltip) {
//     return (
//         <Tip title={value} placement='right'>
//             <Base label={STOCK_LEVEL_LETTERS_MAP[value]} custom={STOCK_LEVEL_COLOR_MAP[value]} />
//         </Tip>
//       )
//   }

//   if (variant === 'stock') {
//     return <Base label={STOCK_LEVEL_LETTERS_MAP[value]} custom={STOCK_LEVEL_COLOR_MAP[value]} />
//   }

//   if (variant === 'status' && !!tooltip) {
//     return (
//         <Tip title={value} placement='right'>
//             <Base label={STATUS_KEYS_LETTERS_MAP[value]} custom={STATUS_KEYS_COLOR_MAP[value]} />
//         </Tip>
//       )
//   }

//   if (variant === 'status') {
//     return <Base label={STATUS_KEYS_LETTERS_MAP[value]} custom={STATUS_KEYS_COLOR_MAP[value]} />
//   }

//   if (variant === 'offers') {
//     if (typeof value !== 'number') {
//         throw new Error('Value for offer variant prop should be number')
//     }

//     return <Base label={value} custom={value > 10 ? 'grey' : tint(1 - value / 10, 'grey')} />
//   }

//   throw new Error('Invalid variant prop supplied.')
// }

// export default Circle
