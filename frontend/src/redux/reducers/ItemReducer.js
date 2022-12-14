const initialState ={
    createItem:{},
    listItems:{},
}

export const CREATE_ITEM = "CREATEOP";
export const LIST_ITEMS = "GETOPSUSER";

export default function (state = initialState,action){

    switch (action.type){
        case CREATE_ITEM:
            return{
                createItem: "item created"
            }

        case LIST_ITEMS:
            return{
                ...state,
                listItems:action.payload
            }

        default:{
            return state;
        }
    }

}