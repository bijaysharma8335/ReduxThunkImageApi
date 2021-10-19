import axios from "axios";
import * as actions from "../api";

const api =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action.type !== actions.apiCallBegan.type) return next(action);

        const { onStart, onSuccess } =
            action.payload;

        if (onStart) dispatch({ type: onStart });

        next(action);

        
            const response = await axios.request({
                baseURL: " https://jsonplaceholder.typicode.com/photos"
               
            });
            //General 
            dispatch(actions.apiCallSuccess(response.data));
            //Specific
            if (onSuccess)
                dispatch({ type: onSuccess, payload: response.data });
       
    };

export default api;
