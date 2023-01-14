import {FC, useEffect} from "react";

import {SearchBar} from "../SearchBar/SearchBar";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {articleActions} from "../../redux";
import {NotFoundArticles} from "../NotFoundArticles/NotFoundArticles";
import {SingleArticle} from "../SingleArticle/SingleArticle";

const Articles: FC = () => {
    const {articles} = useAppSelector(state => state.articleReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(articleActions.getAll({
            params: {
                title_contains: '',
                summary_contains: '',
            }
        }));
    }, [])

    return (
        <div className={'body'}>
            <div className={'wrap'}>
                <SearchBar/>

                <div className={'articlesCount'}>
                    Result: {articles.length}
                </div>

                <div className={'articlesContainer'}>
                    {
                        articles.length
                            ? articles.map((article) => <SingleArticle key={article.id} article={article}/>)
                            : <NotFoundArticles/>
                    }
                </div>
            </div>
        </div>
    );
};

export {Articles};