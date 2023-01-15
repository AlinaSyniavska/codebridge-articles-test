import {FC, useEffect} from "react";

import {SearchBar} from "../SearchBar/SearchBar";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {articleActions} from "../../redux";
import {NotFoundArticles} from "../NotFoundArticles/NotFoundArticles";
import {SingleArticle} from "../SingleArticle/SingleArticle";
import {useLocation, useSearchParams} from "react-router-dom";

const Articles: FC = () => {
    const {articles, title_contains, summary_contains} = useAppSelector(state => state.articleReducer);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({
        title_contains: `${title_contains}`,
        summary_contains: `${summary_contains}`
    });
    const {pathname} = useLocation();


    useEffect(() => {
        dispatch(articleActions.getAll({
            params: {
                title_contains: `${query.get('title_contains')}`,
                summary_contains: `${query.get('summary_contains')}`,
            }
        }));
    }, [dispatch, query, pathname])

    useEffect(() => {
            dispatch(articleActions.saveQueryParams({
                title_contains: query.get('title_contains'),
                summary_contains: query.get('summary_contains'),
            }));
        },
        [dispatch, query]);

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