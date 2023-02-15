import { createTheme } from "@mui/material"

const theme = createTheme({
    palette:{
        mode:"dark",
        primary:{main:"#fff149"}
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    borderRadius:25,
                    margin:"5px"
                }
            }
        }
    },
    typography:{
        button:{
            fontSize:"1rem"
        }
    }
})

export default theme;