import {FC} from "react";
import {IArticle} from "../../interfaces";

interface IProps {
    article: IArticle,
}

const ArticleDetails: FC<IProps> = ({article}) => {
    // const {title} = article;

    return (
        <div>
            ArticleDetails
        </div>
    );
};

export {ArticleDetails};