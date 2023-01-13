import React, {FC} from "react";

import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';

const SearchBar: FC = () => {

    const changeFilterKeywords = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }

    return (
        <div>
            <p className={'searchBarTitle'}>Filter by keywords</p>
            <div className={'searchBarContainer'}>
                <SearchIcon/>
                <Input
                    placeholder={'Search...'}
                    onChange={changeFilterKeywords}
                />
            </div>
        </div>
    );
};

export {SearchBar};