
export const initialState = {
    basket: [],
    user: null,
};


export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // Logic for adding item to Basket
           return { 
               ...state,
               basket: [...state.basket, action.item]
            
            }
            break;
            case 'REMOVE_FROM_BASKET':

            //Logic for removing item from Basket

            // we cloned the basket
            
           let newBasket = [...state.basket];

           const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

           if (index >= 0) {
           
            //item exists in basket, Remove it...
           newBasket.splice(index, 1);
        }

           else {

           }
           
            return { ...state, basket: newBasket };
            default:
                return state;
    }
}


export default reducer;