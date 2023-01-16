import {FC, useEffect} from "react";

import Link from '@mui/material/Link';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Box from '@mui/material/Box';

import {useAppSelector} from "../../hooks";
import {commonHelper, muiHelper} from "../../helpers";
import {ThemeProvider} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ArticleDetails: FC = () => {
    const {articleDetails, title_contains, summary_contains} = useAppSelector(state => state.articleReducer);

    useEffect(() => {
        commonHelper.moveToPageTop();
    }, [])

    return (
        <ThemeProvider theme={muiHelper.createCustomTheme()}>
            <CardMedia
                component="img"
                height="245"
                image={articleDetails?.imageUrl}
                alt={articleDetails?.title}
                sx={{height: 245, position: 'fixed', top: 0, left: 0, zIndex: 1}}
            />

            <Box sx={{display: 'flex', justifyContent: 'center', margin: '150px 0 35px'}}>
                <Card sx={{width: 1290, height: 1000, padding: '35px 75px 50px', display: 'flex', justifyContent: 'center', zIndex: 10}}>
                    <CardContent sx={{display: 'flex', flexDirection: 'column', rowGap: '50px'}}>
                        <Typography component={'div'} variant="h5" color={'primary'} align={'center'}>
                            {articleDetails?.title}
                        </Typography>
                        <Typography component={'div'} color={'primary'} align={'justify'} sx={{fontSize: '18px'}}>
                            {articleDetails?.summary}
                            <br/>
                            <br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum est harum nulla quae quo sequi, totam voluptatem. Dolorum, esse, expedita, facere ipsam libero nobis odit perferendis porro quisquam quod sequi.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum est harum nulla quae quo sequi, totam voluptatem. Dolorum, esse, expedita, facere ipsam libero nobis odit perferendis porro quisquam quod sequi.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum est harum nulla quae quo sequi, totam voluptatem. Dolorum, esse, expedita, facere ipsam libero nobis odit perferendis porro quisquam quod sequi.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum est harum nulla quae quo sequi, totam voluptatem. Dolorum, esse, expedita, facere ipsam libero nobis odit perferendis porro quisquam quod sequi.</p>
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            <Link
                href={`/articles?title_contains=${title_contains}&summary_contains=${summary_contains}`}
                variant="body1"
                underline="none"
                color={'primary'}
                sx={{fontWeight: 'bold', margin: '0 0 45px 150px', display: 'inline-block'}}>
                <KeyboardBackspaceIcon/> Back to homepage
            </Link>
        </ThemeProvider>
    );
};

export {ArticleDetails};
