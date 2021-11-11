import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'


import React from "react";
import './App.css';
import Coin from './pages/coin';
import CoinBill from './pages/coinBill';

import {
  BrowserRouter as Router, Switch,Route,} from "react-router-dom";
// import styled, {ThemeProvider} from 'styled-components';
// import {lightTheme, darkTheme, GlobalStyles} from './theme';

// const StyledApp = styled.div`
// color: ${props => props.theme.fontColor};
// `


function App() {
//   const [ theme, setTheme] = useState("light");
// const themeToggler = () => {
//   theme === 'light' ? setTheme('dark') : setTheme("light");
// }

  return (
    <Web3ReactProvider>

    <div className="App">
      {/* <StyledApp> <button onClick={() => themeToggler()}>button</button> */}
      <Router>
      <Switch>
      <Route path="/" component={Coin} />
      <Route path="/coin-bill" component={CoinBill} />
      </Switch>
      </Router>
      {/* </StyledApp> */}
    </div>
    </Web3ReactProvider>
  );
}

export default App;
