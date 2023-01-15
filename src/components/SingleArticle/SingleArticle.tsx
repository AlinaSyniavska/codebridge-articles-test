import {FC} from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import {IArticle} from "../../interfaces";
import {commonHelper, muiHelper} from "../../helpers";
import {ThemeProvider} from "@mui/material";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {articleActions} from "../../redux";
import React from "react";

interface IProps {
    article: IArticle,
    highlight: string | null,
}

const SingleArticle: FC<IProps> = ({article, highlight}) => {
    const {id, imageUrl, publishedAt, title, summary} = article;
    const dispatch = useAppDispatch();

    return (
        <ThemeProvider theme={muiHelper.createCustomTheme()}>
            <Link to={`/articles/${id}`} onClick={() => dispatch(articleActions.setSelectedArticle(article))}>
                <Card sx={{width: 400, height: 530, display: 'flex', flexDirection: 'column', rowGap: '20px'}}>
                    <CardMedia
                        component="img"
                        height="217"
                        image={imageUrl}
                        alt={title}
                        sx={{height: 217, paddingTop: '1%'}}
                    />
                    <CardContent sx={{padding: '0 20px 0', display: 'flex', flexDirection: 'column', rowGap: '20px'}}>
                        <Typography
                            component="div"
                            color={'primary.light'}
                            sx={{fontSize: 14}}
                        >
                            <DateRangeIcon sx={{color: '#868686'}}/> {`${commonHelper.getFormatDate(publishedAt)}`}
                        </Typography>
                        <Typography component={'div'} variant="h5" color={'primary'}>
                            {highlight
                                ? getHighlightedText(commonHelper.substringText(title, 70), highlight)
                                : commonHelper.substringText(title, 70)}
                        </Typography>
                        <Typography component={'div'} variant="body1" color={'primary'}>
                            {highlight
                                ? getHighlightedText(commonHelper.substringText(summary, 100), highlight)
                                : commonHelper.substringText(summary, 100)}
                        </Typography>
                        <Typography component={'div'} variant="body1" color={'primary'} sx={{fontWeight: 'bold'}}>
                            Read more <ArrowRightAltIcon/>
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </ThemeProvider>
    );
};

function getHighlightedText(text: string, higlight: string, color = 'yellow') {
    const parts = text.split(new RegExp(`(${higlight})`, "gi"));
    return parts.map((part, index) => (
        <React.Fragment key={index}>
            {part.toLowerCase() === higlight.toLowerCase() ? (
                <b style={{backgroundColor: `${color}`}}>{part}</b>
            ) : (
                part
            )}
        </React.Fragment>
    ));
}

export {SingleArticle};