import {FC} from "react";

import Link from '@mui/material/Link';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import {useAppSelector} from "../../hooks";
import {muiHelper} from "../../helpers";
import { ThemeProvider } from "@mui/material";


const ArticleDetails: FC = () => {
    const {articleDetails} = useAppSelector(state => state.articleReducer);
    // const {title, summary, imageUrl} = articleDetails as IArticle;

    return (
        <ThemeProvider theme={muiHelper.createCustomTheme()}>





            {articleDetails?.imageUrl}
            {articleDetails?.title}
            {articleDetails?.summary}


            <Link
                href="/"
                variant="body1"
                underline="none"
                color={'primary'}
                sx={{fontWeight: 'bold'}}
            >
                <KeyboardBackspaceIcon/> Back to homepage
            </Link>

        </ThemeProvider>
    );
};

export {ArticleDetails};