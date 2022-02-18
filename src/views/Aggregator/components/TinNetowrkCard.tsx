import React from 'react'
import { Card, CardBody, Heading, /* Text */ } from '@pancakeswap-libs/uikit'
// import { useWallet } from '@binance-chain/bsc-use-wallet'
// import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
// import { getBalanceNumber } from 'utils/formatBalance'
// import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import Iframe from 'react-iframe'
// import { getCakeAddress } from 'utils/addressHelpers'
// import CardValue from './CardValue'
// import { useFarms } from '../../../state/hooks'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`
// eslint-disable-next-line
const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`
// const { account} = useWallet()
const TinNetowrkCard = () => {
    return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          Use tin.network to see all your coins across multiple chains in your wallets, and all of your Farms and Pools in one place. Connect your wallet or enter your wallet address to get started. 
        </Heading>
        <Iframe id="iframe-widget" 
                height='1005'
                url='https://tin.network/en/dashboard/'
                width="100%"/>
                
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TinNetowrkCard
