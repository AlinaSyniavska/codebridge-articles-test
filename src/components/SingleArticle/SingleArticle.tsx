import {FC} from "react";
import {IArticle} from "../../interfaces";

interface IProps {
    article: IArticle,
}

const SingleArticle: FC<IProps> = ({article}) => {
    const {imageUrl, publishedAt, title, summary} = article;

    return (
        <div>
            {title}
        </div>
    );
};

export {SingleArticle};