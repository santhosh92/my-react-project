
const initialState = {
    age:20
};

const reducer = (state = initialState, action) => {
 const newState = {...state};

 if(action.type == 'Age_Up'){
     newState.age++;
 }

 if(action.type == 'Age_Down'){
     newState.age--;
 }

 return newState;
}

export default reducer;