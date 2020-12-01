import React from 'react';
import { Circle } from '../../Circle';
import * as types from '../../Circle.types';

export default {
  title: 'views/Example/Circle',
  component: Circle,
}

export const Winner = () => <Circle variant="winner" />

export const OffersZero = () => <Circle variant="offers" value={0} />
export const OffersLow = () => <Circle variant="offers" value={4} />
export const OffersMed = () => <Circle variant="offers" value={8} />
export const OffersHigh = () => <Circle variant="offers" value={12} />

export const StockOut = () => <Circle variant="stock" value="outOfStock" />
export const StockLow = () => <Circle variant="stock" value="lowStock" />
export const StockSufficient = () => <Circle variant="stock" value="sufficientStock" />

export const StatusActive = () => <Circle variant="status" value="active" />
export const StatusInactive = () => <Circle variant="status" value="inactive" />
export const StatusDisabled = () => <Circle variant="status" value="disabled" />
export const StatusArchived = () => <Circle variant="status" value="archived" />
