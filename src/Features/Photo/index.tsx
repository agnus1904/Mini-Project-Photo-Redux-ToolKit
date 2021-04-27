import React from 'react';
import {useRouteMatch, Route, Switch} from 'react-router-dom'
import MainPage from "./Page/Main";
import AddEdit from "./Page/AddEdit";
import NotFound from "Components/NotFound";

interface PhotoProps{

}

const defaultProps: PhotoProps = {

}

const Photo:React.FC<PhotoProps> = ():React.ReactElement => {

    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.url} component={MainPage} />

            <Route path={`${match.url}/add`} component={AddEdit} />
            <Route path={`${match.url}/:photoId`} component={AddEdit} />
            <Route component={NotFound} />
        </Switch>
    );
};

Photo.defaultProps = defaultProps;

export default Photo;