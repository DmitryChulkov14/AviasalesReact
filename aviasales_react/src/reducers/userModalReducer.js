import {OPEN_MODAL, CLOSE_MODAL} from "../components/modal/actions";

const initialState = {
    isOpen: false,
    title: 'Модальное окно',
    content: null,
};

export default function userModalReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            console.log(action);
            return Object.assign({}, state, {
                isOpen: true,
                title: action.title,
                content: action.content
            });
        case CLOSE_MODAL:
            return Object.assign({}, state, {
                isOpen: false
            });
        default:
            return state;
    }
}
