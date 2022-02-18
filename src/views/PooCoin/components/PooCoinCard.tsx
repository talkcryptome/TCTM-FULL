import React from 'react'
import { Card, CardBody, Heading, /* Text */ } from '@pancakeswap-libs/uikit'
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

const PooCoinCard = () => {
    return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="xl" mb="24px">
        Use this chart to check out Coin Past Performance
        </Heading>
        <Iframe id="iframe-widget" 
                url="https://poocoin.app/"
                height="1505px" 
                width="100%" />
                
      </CardBody>
    </StyledTwitterCard>
  )
}

export default PooCoinCard
