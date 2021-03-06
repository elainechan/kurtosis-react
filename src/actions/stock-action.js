import axios from 'axios';
import thunk from 'redux-thunk';

// DISPLAY_DATA
export const REQUEST_STOCK_DATA = 'REQUEST_STOCK_DATA';
export const RECEIVE_STOCK_DATA = 'RECEIVE_STOCK_DATA';

export function requestStockData(symbol) {
	return function (dispatch) {
		const getStockData = axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
				.then(response => {
					dispatch({
						type: RECEIVE_STOCK_DATA,
						payload: response.data
					});
					console.log(`getStockData() inside stock-action.`);
					return;
				})
				.catch(error => {
					console.log(error);
					return;
				});
	}
}