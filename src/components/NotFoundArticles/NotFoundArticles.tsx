import {FC} from "react";
import Alert from '@mui/material/Alert';

const NotFoundArticles: FC = () => {
    return (
        <Alert severity="warning" variant="outlined" icon={false}>Sorry we couldn't find any matches for your filter keywords :(</Alert>
    );
};

export {NotFoundArticles};