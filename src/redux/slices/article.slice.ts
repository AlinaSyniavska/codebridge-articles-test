import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IArticle, IQueryParams} from "../../interfaces";
import {articleService} from "../../services";

interface IState {
    articles: IArticle[],
    selectedArticlesByTitle: IArticle[],
    selectedArticlesBySummary: IArticle[],
    articleDetails: IArticle | null,
    error: string,
    title_contains: string,
    summary_contains: string,
}

const initialState: IState = {
    articles: [],
    selectedArticlesByTitle: [],
    selectedArticlesBySummary: [],
    articleDetails: null,
    error: '',
    title_contains: '',
    summary_contains: '',
};

const getAllByTitle = createAsyncThunk<IArticle[], { params: IQueryParams }>(
    'articleSlice/getAllByTitle',
    async ({params}, {rejectWithValue}) => {
        try {
            const {data} = await articleService.getAll(params);
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
);

const getAllBySummary = createAsyncThunk<IArticle[], { params: IQueryParams }>(
    'articleSlice/getAllBySummary',
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
        fillArticles: (state, action) => {
            state.articles = action.payload;
        },
        setSelectedArticle: (state, action) => {
            state.articleDetails = action.payload;
        },
        saveQueryParams: (state, action) => {
            state.title_contains = action.payload.title_contains;
            state.summary_contains = action.payload.summary_contains;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllByTitle.fulfilled, (state, action) => {
                state.selectedArticlesByTitle = action.payload;
            })
            .addCase(getAllByTitle.rejected, (state, action) => {
                state.error = action.payload as any;
            })
            .addCase(getAllBySummary.fulfilled, (state, action) => {
                state.selectedArticlesBySummary = action.payload;
            })
            .addCase(getAllBySummary.rejected, (state, action) => {
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

const {reducer: articleReducer, actions: {fillArticles, saveQueryParams, setSelectedArticle}} = articleSlice;

const articleActions = {
    fillArticles,
    getAllByTitle,
    getAllBySummary,
    getById,
    saveQueryParams,
    setSelectedArticle,
};

export {
    articleActions,
    articleReducer,
}
