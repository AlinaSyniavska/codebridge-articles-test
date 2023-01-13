import React, {FC} from "react";

import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';

const SearchBar: FC = () => {

    const debounce = (fn: Function, ms = 500) => {
        let timeoutId: ReturnType<typeof setTimeout>;
        return function (this: any, ...args: any[]) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(this, args), ms);
        };
    };

    const changeFilterKeywords = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }

    const debouncedChangeFilterKeywords = debounce(changeFilterKeywords, 1000);

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