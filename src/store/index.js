import {configureStore} from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";

const store=configureStore({
	reducer:AuthSlice.reducer
})

export default store;