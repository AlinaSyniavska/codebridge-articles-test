import {FC} from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import {IArticle} from "../../interfaces";
import {commonHelper} from "../../helpers";
import {createTheme, ThemeProvider} from "@mui/material";
import {Link} from "react-router-dom";

interface IProps {
    article: IArticle,
}

const SingleArticle: FC<IProps> = ({article}) => {
    const {imageUrl, publishedAt, title, summary} = article;

    const theme = createTheme({
        typography: {
            fontFamily: [
                'Montserrat',
                'sans-serif'
            ].join(',')
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Link to={'/articles/:id'}>
                <Card sx={{ width: 400, height: 530, display: 'flex', flexDirection: 'column', rowGap: '20px'}}>
                    <CardMedia
                        component="img"
                        height="217"
                        image={imageUrl}
                        alt={title}
                        sx={{height: 217, paddingTop: '1%'}}
                    />
                    <CardContent sx={{ padding: '0 20px 0', display: 'flex', flexDirection: 'column', rowGap: '20px'}}>
                        <Typography
                            component="div"
                            sx={{ color: 'rgb(54, 54, 54, 0.6)', fontSize: 14 }}
                        >
                            <DateRangeIcon/> {`${commonHelper.getFormatDate(publishedAt)}`}
                        </Typography>
                        <Typography variant="h5" color="#363636">
                            {commonHelper.substringText(title, 70)}
                        </Typography>
                        <Typography variant="body1" color="#363636">
                            {commonHelper.substringText(summary, 100)}
                        </Typography>
                        <Typography variant="body1" color="#363636" sx={{ fontWeight: 'bold' }}>
                            Read more <ArrowRightAltIcon/>
                        </Typography>
                    </CardContent>
                </Card>
            </Link>



        </ThemeProvider>
    );
};

export {SingleArticle};