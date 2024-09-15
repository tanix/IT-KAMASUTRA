const SET_USER_DATA= 'SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isFetching: true,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true

            };
        }
        default:
            return state;
    }

}

export const setUserData = (data) => {
    return { type: SET_USER_DATA, data}
}

export default authReducer;