import React from 'react';
import { Profile } from './page/Profile';
import Header from './componens/Header';
import Movies from './page/Movies';
import Search from './componens/Search';
import { StateMovies } from './context/StateMovies';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <StateMovies>
      <BrowserRouter>
        <Header text="HOOKED" />
        <Search />
        <p className="text-center pt-4">
          Sharing a few of our favourite movies
        </p>
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/profile/:name" component={Profile} />
        </Switch>
      </BrowserRouter>
    </StateMovies>
  );
}

export default App;
