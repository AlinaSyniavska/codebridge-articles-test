import {FC} from "react";

import Link from '@mui/material/Link';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import {useAppSelector} from "../../hooks";
import {IArticle} from "../../interfaces";


const ArticleDetails: FC = () => {
    const {articleDetails} = useAppSelector(state => state.articleReducer);
    // const {title, summary, imageUrl} = articleDetails as IArticle;

    return (
        <div>





            {articleDetails?.imageUrl}
            {articleDetails?.title}
            {articleDetails?.summary}


            <Link href="/" variant="body2">
                <ArrowRightAltIcon/> Back to homepage
            </Link>

        </div>
    );
};

export {ArticleDetails};