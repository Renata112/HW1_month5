

const initialState={
    count:0
}
const reducer =( state=initialState, action )=>{
    if (action.type=== 'PLUSONE'){
        return {
            count : state.count + 1
        }
    } else if (action.type==='MINUSONE'){
         if ( state.count > 0){
            return {
                count : state.count - 1
            };
        } else {
             return initialState;
         }
    } else if (action.type==='PLUSTEN'){
        return {
            count: state.count + 10
        }
    } else if (action.type==='MINUSTEN'){
        if (state.count > 0){
            return {
                count : state.count -10
            };
        } else {
            return initialState;
        }
    } else if (action.type==='RESET'){
        return {
            count:0
        }
    }
    return state;
};
export default reducer;