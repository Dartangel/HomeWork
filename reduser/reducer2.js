export const initialState = {
    id=0
}
function reducer2(state = [], action) {
    switch (action.type) {
        case 'To Do':
            return {
                 counter: [],
                 id=id++
                 }
        
            
    }
    return state
}    
export default reducer2

