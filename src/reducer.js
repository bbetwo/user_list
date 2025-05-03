
const initialState = {
    userData: [],
    userFind: {},
    userEdit: {}
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_DATA":
            return {
                ...state,
                userData: action.payload
            }

        case 'USER_FIND':

            return {
                ...state,
                userFind: action.payload
            }
        case 'USER-EDIT':
            const { id } = action.payload;
            const index = state.userData.findIndex((el) => {
                return el.id === id
            })
            console.log('RABOTAET ??');
            
            const newObj = { ...state.userData[index], ...action.payload }

            const newState = [...state.userData.slice(0, index), newObj, ...state.userData.slice(index + 1)]
            console.log(newState,'EBATTTTT');
            
        return {
                ...state,
                userData: newState
        }


        //     return {
        //         ...state,
        //         userData: state.userData.map((user)=>{
        //             user.id === action.payload.id ? {...user, action.payload}
        //         })

        //         name: `Пользователь ${i + 1}`,
        //         jobTitle: 'dev',
        //         departament: 'ss',
        //         company: 'mts',
        //     }

        default:
            return state;
    }
}

