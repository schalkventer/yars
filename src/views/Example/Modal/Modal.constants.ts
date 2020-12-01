
import * as types from './Modal.types';

export const ALERTS: Record<types.alertKey, types.Alert> = {
    invalidAuto: {
        title: 'Invalid Auto Pricing',
        message: 'Maximum value is required to be higher than than the specified minimum value.',
    },
    maxTooLow: {
        title: 'Invalid Auto Pricing',
        message: 'Maximum value is required to be higher than the current price.',
    },
    noChanges: {
        title: 'No Changes',
        message: 'There are no changes to save. Please select "cancel" if you do not want to change data.',
    }
}
