import {createSlice} from "@reduxjs/toolkit";

const AuthSlice=createSlice(
	{
		name:'AuthSlice',
		initialState:{
			token:null,
			profileUrl:null,
			name:null,
			email:null
		},
		reducers:{
			login(state,action){

			},
			logout(state){

			}
		}
	}
)

export const AuthAction=AuthSlice.actions;

export default AuthSlice;