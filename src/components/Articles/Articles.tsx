import {FC, useEffect} from "react";

import {SearchBar} from "../SearchBar/SearchBar";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {articleActions} from "../../redux";
import {NotFoundArticles} from "../NotFoundArticles/NotFoundArticles";

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

                <div className={'articlesContainer'}>
                    {
                        articles.length
                            ? articles.map((art) => {
                                return <div key={art.id}>{art.title}</div>;
                            })
                            : <NotFoundArticles/>
                    }
                </div>
            </div>
        </div>
    );
};

export {Articles};