import React from 'react';
import './App.css';
import NotFound from "./Components/NotFound";
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import Header from "./Components/Header";

// lazy load
const Photo = React.lazy(()=> import('./Features/Photo'));

function App() {
  return (
    <div className="App">
        <React.Suspense fallback={<div>Loading.....</div>}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Redirect exact to='photos' from='/'/>


                    <Route path='/photos' component={Photo} />
                    <Route path='/admin' component={Photo} />

                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </React.Suspense>
    </div>
  );
}

export default App;