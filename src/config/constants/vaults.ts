import contracts from './contracts'
import { VaultConfig, QuoteToken } from './types'

const TCTM_BUSD_LP_MAINNET = `0xc3bdff1fa4985b9977dddf2ea2b98c75dd4ec65c`
// const TCTM_BNB_LP_MAINNET = `0xc3bdff1fa4985b9977dddf2ea2b98c75dd4ec65c`
const TCTM_MAINNET = `0xBCFeDe73a76E2294B82d28c2737F9eECdf0342eB`

const vaults: VaultConfig[] = [
  {
    risk: 1,
    lpSymbol: 'TCTM-BUSD LP2',
    lpAddresses: {
      97: '',
      56: TCTM_BUSD_LP_MAINNET,
    },
    depositFeeBP: '0%',
    tokenSymbol: 'TCTM',
    tokenAddresses: {
      97: '',
      56: TCTM_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0x01b1405bEF38652468C9f43861010eB73E0AA443',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    depositFeeBP: '1%',
  }, 

].map((vault, index) => ({ ...vault, pid: index }))

export default vaults
