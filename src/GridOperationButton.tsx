import {Grid,Button,styled} from "@mui/material";
import { deflate } from "zlib";

interface GridOperationButtonProps{
    operation:string;
    selectOperation:(operation:string)=>void;
    selectedOperation: string;
}

const StyledButton =  styled(Button)<{selected:boolean}>((props)=>({
    backgroundColor:"#000",
    borderColor:props.selected?"#f00":"fff"
}))
const GridOperationButton: React.FC<GridOperationButtonProps> =({
    operation,
    selectOperation,
    selectedOperation
})=>{
    return(
        <Grid item  xs={3}>
            <StyledButton 
                fullWidth 
                variant="outlined" 
                onClick={()=> selectOperation(operation)}
                selected ={selectedOperation ===  operation}
                >
                {operation}
            </StyledButton>
        </Grid>
    )
}

export default GridOperationButton;