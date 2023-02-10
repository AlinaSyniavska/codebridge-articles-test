import React from "react";
import {FC} from "react";
import {Articles, SearchBar} from "../../components";

const ArticlesPage: FC = () => {
    return (
        <React.Fragment>
            <SearchBar/>
            <Articles/>
        </React.Fragment>
    );
};

export {ArticlesPage};