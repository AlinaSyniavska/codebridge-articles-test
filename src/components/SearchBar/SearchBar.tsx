import React, {FC} from "react";

import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import {articleActions} from "../../redux";
import {useAppDispatch} from "../../hooks";

const SearchBar: FC = () => {
    const dispatch = useAppDispatch();

    const debounce = (fn: Function, ms = 500) => {
        let timeoutId: ReturnType<typeof setTimeout>;
        return function (this: any, ...args: any[]) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(this, args), ms);
        };
    };

    const changeFilterKeywords = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filterKeywords = event.target.value;
        console.log(filterKeywords);

        dispatch(articleActions.getAll({
            params: {
                title_contains: filterKeywords,
                summary_contains: filterKeywords,
            }
        }));
    }

    const debouncedChangeFilterKeywords = debounce(changeFilterKeywords);

    return (
        <div>
            <p className={'searchBarTitle'}>Filter by keywords</p>
            <div className={'searchBarContainer'}>
                <SearchIcon/>
                <Input
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