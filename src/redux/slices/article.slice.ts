import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IArticle, IQueryParams} from "../../interfaces";
import {articleService} from "../../services";

interface IState {
    articles: IArticle[],
    articleDetails: IArticle | null,
    error: string,
}

const initialState: IState = {
    articles: [],
    articleDetails: null,
    error: '',
};

const getAll = createAsyncThunk<IArticle[], { params: IQueryParams }>(
    'articleSlice/getAll',
    async ({params}, {rejectWithValue}) => {
        try {
            const {data} = await articleService.getAll(params);
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
);

const getById = createAsyncThunk<IArticle, { id: String }>(
    'articleSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await articleService.getById(id);
            return data;
        } catch (e: any) {
            return rejectWithValue({errorStatus: e.message})
        }
    }
);

const articleSlice = createSlice({
    name: 'articleSlice',
    initialState,
    reducers: {
        setSelectedArticle: (state, action) => {
            const {article} = action.payload;
            state.articleDetails = article;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.articles = action.payload;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload as any;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.articleDetails = action.payload;
            })
            .addCase(getById.rejected, (state, action) => {
                state.error = action.payload as any;
            })
    },
});

const {reducer: articleReducer, actions: {setSelectedArticle}} = articleSlice;

const articleActions = {
    getAll,
    getById,
    setSelectedArticle,
};

export {
    articleActions,
    articleReducer,
}
