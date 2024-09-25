import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Cocktail, State } from "../components/interfaces";

export const initialState: State = {
    cocktails: [],
    cart: [],
    error: null,
}

export const fetchCocktails = createAsyncThunk<{ drinks: Cocktail[] }, string>('cocktails/fetchData', async (link: string) => {
    try {
        const response = await fetch(link);
        if (!response.ok) {
            throw new Error('Failed with status code: ' + response.status);
        }
        const cocktails: Cocktail[] = await response.json();
        return cocktails;
    } catch (error: any) {
        return error.message;
    }
});

const storeSlice = createSlice({
    name: 'cocktails',
    initialState,
    reducers: {
        cartAdd: (state, action: PayloadAction<Cocktail>) => {
            state.cart.push(action.payload);
        },
        cartRemove: (state, action: PayloadAction<string>) => {
            state.cart = state.cart.filter((item) => item.idDrink !== action.payload);
        },
        cartAll: (state) => {
            state.cart = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCocktails.fulfilled, (state, action: PayloadAction<{ drinks: Cocktail[] }>) => {
                state.cocktails = action.payload.drinks;
                state.error = null;
            })
            .addCase(fetchCocktails.rejected, (state, action) => {
                state.cocktails = [];
                state.error = action.error.message || null;
            })
    }
});

export const { cartAdd, cartRemove, cartAll } = storeSlice.actions;

export default storeSlice.reducer;