import React, {FC} from "react";
import {useSearchParams} from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';

import {articleActions} from "../../redux";
import {useAppDispatch} from "../../hooks";
import {commonHelper} from "../../helpers";

const SearchBar: FC = () => {
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({
        title_contains: '',
        summary_contains: ''
    });

/*    const debounce = (fn: Function, ms = 500) => {
        let timeoutId: ReturnType<typeof setTimeout>;
        return function (this: any, ...args: any[]) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(this, args), ms);
        };
    };*/

    const changeFilterKeywords = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filterKeywords = event.target.value;

        setQuery({
            title_contains: `${filterKeywords}`,
            summary_contains: `${filterKeywords}`
        });

        dispatch(articleActions.getAll({
            params: {
                title_contains: filterKeywords,
                summary_contains: filterKeywords,
            }
        }));
    }

    const debouncedChangeFilterKeywords = commonHelper.debounce(changeFilterKeywords);

    return (
        <div>
            <p className={'searchBarTitle'}>Filter by keywords</p>
            <div className={'searchBarContainer'}>
                <SearchIcon/>
                <Input
                    defaultValue={`${query.get('title_contains')}`}
                    placeholder={'Search...'}
                    onChange={debouncedChangeFilterKeywords}
                    fullWidth={true}
                    disableUnderline={true}
                />
            </div>
        </div>
    );
};

export {SearchBar};