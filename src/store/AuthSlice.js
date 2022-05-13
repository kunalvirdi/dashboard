import {createSlice} from "@reduxjs/toolkit";

const AuthSlice=createSlice(
	{
		name:'AuthSlice',
		initialState:{
			token:null,
			imgUrl:null,
			name:null,
			email:null
		},
		reducers:{
			login(state,action){
				state.token=action.payload.user.token
				state.imgUrl=action.payload.user.url
				state.name=action.payload.user.name;
				state.email=action.payload.user.email;
			},
			logout(state){
				state.token=null;
				state.imgUrl=null;
				state.name=null;
				state.email=null;
			}
		}
	}
)

export const AuthAction=AuthSlice.actions;

export default AuthSlice;