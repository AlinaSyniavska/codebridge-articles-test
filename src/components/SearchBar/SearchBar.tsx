import React, {FC} from "react";
import {useSearchParams} from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';

import {commonHelper} from "../../helpers";

const SearchBar: FC = () => {
    const [query, setQuery] = useSearchParams({
        title_contains: '',
        summary_contains: ''
    });

    const changeFilterKeywords = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filterKeywords = event.target.value;

        setQuery({
            title_contains: `${filterKeywords}`,
            summary_contains: `${filterKeywords}`
        });
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