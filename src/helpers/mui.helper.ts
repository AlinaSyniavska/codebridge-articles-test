import {createTheme} from "@mui/material";

const muiHelper = {
    createCustomTheme: () => {
        return createTheme({
            typography: {
                fontFamily: [
                    'Montserrat',
                    'sans-serif'
                ].join(',')
            },
        });
    },

}

export {
    muiHelper
}

