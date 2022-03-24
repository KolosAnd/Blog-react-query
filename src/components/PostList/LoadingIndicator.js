import {STATUS} from "../../hooks/status";

export const LoadingIndicator = props => {
    if(props.status === STATUS.LOADING){
        return <span>Loading...</span>
    }
    if(props.status === STATUS.ERROR){
        return <span>Error: {props.error.message}</span>
    }

    return props.data;
}
