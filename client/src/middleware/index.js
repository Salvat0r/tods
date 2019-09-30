import { } from "../actions/constType";
import { } from "../actions";

const formValidationMiddleware = ({ dispatch, getState }) => next => action => {
    // const state = _.cloneDeep(getState());
    // const { packages } = state.order.shipping;
    // const { index } = action.payload ? action.payload : 0;
    // let errors = {};
    // switch (action.type) {
    //     case PACKAGE_MEASURE:
    //         const { measure, value } = action.payload;
    //         let sum = 0;
    //         ["width", "height", "length"].forEach(m => {
    //             const current = m === measure;
    //             const v = current ? value : packages[index][m];
    //             errors[m] = v > 180 ? "< 180cm" : null;
    //             sum += v;
    //         });
    //         errors.overall = sum > 240 ? "la somma deve essere < 240cm" : null;
    //         dispatch(packageValidationErrors(index, errors));
    //         next(action);
    //         break;

    //     default:
    //         next(action);
    //         break;
    // }
};

export default formValidationMiddleware;
