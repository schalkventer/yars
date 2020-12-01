import React, { FC, useEffect, useState } from "react"

import * as types from "./Modal.types"
import { useToggle } from 'react-use';
import { Presentation } from "./Modal.Presentation"
import * as viewTypes from "../types"

const calcAuto = (data: viewTypes.Product | null): boolean => !!data && !!data.auto
const calcMin = (data: viewTypes.Product | null): number => data ? (data.auto && data.auto[0]) || data.price : 0;
const calcMax = (data: viewTypes.Product | null): number => data ? (data.auto && data.auto[0]) || data.price : 0;

/**
 * @name Modal
 *
 * @description TODO: Add description
 */
export const Modal: FC<types.Props> = props => {
  const { data, onUpdateProduct } = props

  const [phase, setPhase] = useState<types.phase>('inactive');
  const [alert, setAlert] = useState<types.alertKey | null>(null);
  const [productData, setProductData] = useState<null | Omit<viewTypes.Product, 'auto'>>(null)

  const [autoActive, toggleAutoActive] = useToggle(calcAuto(data));
  const [min, setMin] = useState<number>(calcMin(data))
  const [max, setMax] = useState<number>(calcMax(data))

  /**
   * @name cancelEdit
   *
   * @description TODO Add description
   */
  const cancelEdit = () => {
    setPhase('resting');
    toggleAutoActive(calcAuto(data))
    setMin(calcMin(data))
    setMax(calcMax(data))
  }

  /**
   * @name saveEdit
   *
   * @description TODO Add description
   */
  const saveEdit = () => {
    const newAuto = autoActive && [min, max] as [number, number];

    console.log(JSON.stringify(newAuto), JSON.stringify(!!data && data.auto))

    if (JSON.stringify(newAuto) === JSON.stringify(!!data && data.auto)) {
      setAlert('noChanges');
      return;
    }

    if (autoActive && min >= max) {
      setAlert('maxTooLow');
      return;
    }

    if (data && data.price >= max) {
      setAlert('invalidAuto');
      return;
    }


    if (!productData) {
      throw new Error('Can not save if "productData" is not defined');
    }

    onUpdateProduct({
      ...productData,
      auto: newAuto,
    })

    setPhase('inactive');
  }

  /**
   * @name closeModal
   *
   * @description TODO Add description
   */
  const closeModal = () => {
    if (phase === 'resting') {
      setPhase('inactive')
    }
  }

  /**
   * @name actions
   *
   * @description TODO Add description
   */
  const actions: types.Actions = {
    toggleAutoActive,
    closeModal,
    updateMax: (newValue: number) => setMax(newValue),
    updateMin: (newValue: number) => setMin(newValue),
    initEdit: () => setPhase('editing'),
    cancelEdit,
    saveEdit,
  }

  /**
   * @name 
   *
   * @description TODO Add description
   */
  useEffect(() => {
    if (!data) return;

    setProductData(data);
    toggleAutoActive(calcAuto(data))
    setMin(calcMin(data))
    setMax(calcMax(data))
    setPhase('resting');
  }, [data]);

  if (phase === 'inactive') {
    return null;
  }

  if (!productData) {
    throw new Error('"phase" is not "inactive", but "productDat" does not exist')
  }

  return (
    <Presentation
      {...productData}
      phase={phase}
      actions={actions}
      auto={autoActive && [min, max]}
      alert={alert}
    />
  )
}

export default Modal
