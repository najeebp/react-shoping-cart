import { UPDATE_CART } from '../actions/constants'

const initialState = {
	shopingCarts: [],
}

export default function (state = initialState, action) {
	switch (action.type) {
		case UPDATE_CART:
			return {
				...state,
				shopingCarts: action.payload
			}
		default:
			return state
	}
}