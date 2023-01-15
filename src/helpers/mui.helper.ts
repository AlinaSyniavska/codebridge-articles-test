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
            palette: {
                primary: {
                    light: '#868686',
                    main: '#363636',
                    contrastText: '#fff',
                },
            }

        });
    },

}

export {
    muiHelper
}

