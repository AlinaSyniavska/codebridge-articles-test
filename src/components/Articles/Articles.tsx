import {FC} from "react";

import {SearchBar} from "../SearchBar/SearchBar";

const Articles: FC = () => {
    return (
        <div>
            <div className={'wrap'}>
                <SearchBar/>

                <div className={'articlesContainer'}>

                </div>
            </div>
        </div>
    );
};

export {Articles};