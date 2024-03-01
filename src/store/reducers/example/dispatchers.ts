import {bindActions} from '../../bindActions';
import {actions} from './reducer';

export const {
    someFieldHandler
} = bindActions(actions);
