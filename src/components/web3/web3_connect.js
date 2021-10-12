import {useEffect, useState} from 'react';
import {onboard, logAddress} from './onboard'

function WEB3_CONNECT(){ 
  
  //connect wallet
  useEffect (() => {

    const ConnectWallet = async() => {
      const connected = await onboard.walletSelect();
      if(connected){
        await onboard.walletCheck();
        await logAddress();
      }
    }
    ConnectWallet();
  }, [])

  return(null);
}

export default WEB3_CONNECT;