import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, /* Redirect, */ Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ButtonMenu, ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import PageLoader from './components/PageLoader'
// import Vault from 'views/Vault'


// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const Vaults = lazy(() => import('./views/Vault'))
const Bridges = lazy(() => import('./views/Bridge'))
const Aggregators = lazy(() => import('./views/Aggregator'))
const DexGurus = lazy(() => import('./views/dexguru'))
const PooCoins = lazy(() => import('./views/PooCoin'))
// const Lottery = lazy(() => import('./views/Lottery'))
// const Pools = lazy(() => import('./views/Pools'))
// const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
// const Nft = lazy(() => import('./views/Nft'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

  useFetchPublicData()

  return (
    <Router>
       <ResetCSS />
       <ButtonMenu>
      <GlobalStyle />
      <Menu>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/farm">  
              <Farms />
            </Route>
            <Route path="/pool">
              <Farms tokenMode />
            </Route>
            <Route path="/vault">
              <Vaults />
            </Route>
            <Route path="/bridge">
              <Bridges />
            </Route>
            <Route path="/tin">
              <Aggregators />
            </Route>
            <Route path="/dex">
              <DexGurus />
            </Route>
            <Route path="/poo">
              <PooCoins />
            </Route>
            {/* <Route path="/pools"> */}
            {/*  <Pools /> */}
            {/* </Route> */}
            {/* <Route path="/lottery"> */}
            {/*  <Lottery /> */}
            {/* </Route> */}
            {/* <Route path="/ifo"> */}
            {/*  <Ifos /> */}
            {/* </Route> */}
            {/* <Route path="/nft"> */}
            {/*  <Nft /> */}
            {/* </Route> */}
            {/* Redirect */}
            {/* <Route path="/staking"> */}
            {/*  <Redirect to="/pools" /> */}
            {/* </Route> */}
            {/* <Route path="/syrup"> */}
            {/*  <Redirect to="/pools" /> */}
            {/* </Route> */}
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Menu>
      </ButtonMenu>
    </Router>
  )
}

export default React.memo(App)
