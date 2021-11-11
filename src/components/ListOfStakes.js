import React, { useState } from 'react'
import { useCallback } from 'react'

//to connect metamask
import { useWeb3React } from "@web3-react/core"
import { injected } from "../components/wallet/connectors"
//to connect Walletconnect
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
//to connect Coinbase, Fortmatic, Fortmatic, portis wallet
// import { WalletLinkConnector } from '@web3-react/walletlink-connector'

import slogo from "../assets/images/icons/logo.png";
import metamask from "../assets/images/icons/metamask-icon.svg";
import coin from "../assets/images/icons/coin-base.jpg";
import fortmatic from "../assets/images/icons/fortmatic-icon.svg";
import wallet from "../assets/images/icons/wallet-icon.svg";

export default function ListOfStakes() {
   const [counter, setCounter] = useState(1);
   const { active, account, library, connector, activate, deactivate } = useWeb3React();
   const handleConnectMetamaskWallet = () => {
      try {
         activate(injected);
       } catch (ex) {
         console.log(ex);
       }
  }

const handleConnectWalletConnect = useCallback(() => {
           const bridgeUrl = "https://bridge.walletconnect.org";
   
           // Create a connector
           const connector = new WalletConnect({
             bridge: "https://bridge.walletconnect.org", // Required
             qrcodeModal: QRCodeModal,
           });
           // Check if connection is already established
           if (!connector.connected) {
               // create new session
               
               connector.createSession({chainId: 56});
               
           }
           
           connector.on("connect", handleQRCode.bind(this, bridgeUrl));
       }, []);
   
       const handleQRCode = (bridgeUrl, error, payload) => {
   
           if (error) {
             throw error;
           }
           console.log("Event: ", payload.event);
           console.log('aa', payload)
           console.log('bb', payload.params[0])
           // setAccountAddress(payload.params[0].accounts[0]);
           // setTrustConnect(payload.event)
   
           // Get provided accounts and chainId
           // const { accounts, chainId } = payload.params[0];
         
           // Draft transaction
           // const tx = {
           //   from: accounts, // Required
           //   to: "0xf5A07f885B9C2BC30e3766F5727E05bCE8b2B549", // Required (for non contract deployments)
           //   data: "0x", // Required
           //   gasPrice: "0x02540be400", // Optional
           //   gas: "0x9c40", // Optional
           //   value: "0x00", // Optional
           //   nonce: "0x0114" // Optional
           // };
         
           // Send transaction
           /*connector
             .sendTransaction(tx)
             .then((result) => {
               // Returns transaction id (hash)
               console.log(result);
             })
             .catch((error) => {
               // Error returned when rejected
               console.error(error);
             });
         */
       }
       
       const handleConnectFortmatic = () => {
         // try {
         //    activate(WalletLinkConnector.Fortmatic);
         //  } catch (ex) {
         //    console.log(ex);
         //  }
     }
     const handleConnectPortis = () => {
      // try {
      //    activate(WalletLinkConnector.Portis);
      //  } catch (ex) {
      //    console.log(ex);
      //  }
  }
   return (
      <React.Fragment>
         <div className="list-stake ms">
            <div className="d-flex justify-content-between">
               <div className="heading-text-stake ms">
                  <h2>MsDoge Staking</h2>
                  <p>List of stakes below</p>
               </div>
               <div className="">
                  <div className="stake-btn">
                     <a className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Stake</a>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <table className="stake-list-sel fliter-box w-100 my-4 d-none d-md-block">
                     <tr>
                        <td className="p-2">
                           <select>
                              <option>Start date</option>
                              <option>Start date</option>
                              <option>Start date</option>
                           </select>
                        </td>
                        <td className="p-2">
                           <select>
                              <option>Amount of stake</option>
                              <option>Amount of stake</option>
                              <option>Amount of stake</option>
                           </select>
                        </td>
                        <td className="p-2">
                           <select>
                              <option>APY</option>
                              <option>APY</option>
                              <option>APY</option>
                           </select>
                        </td>
                        <td className="p-2">
                           <select>
                              <option>Amount of reward</option>
                              <option>Amount of reward</option>
                              <option>Amount of reward</option>
                           </select>
                        </td>
                        <td className="p-2">
                           <select>
                              <option>Remaining time</option>
                              <option>Remaining time</option>
                              <option>Remaining time</option>
                           </select>
                        </td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                     </tr>
                     <tr className="m-0">
                        {/* <td className="p-2">
                           <h5><b>09/10/2021</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b>1.0 </b> MsDoge</h5>
                        </td>
                        <td className="p-2">
                           <h5><b>0.5%</b></h5>
                        </td>
                        <td className="p-2">
                           <h5>10 MSDOGE <br /> 10 LORIA</h5>
                        </td>
                        <td className="p-2">
                           <h5><b className="text-read red">30d 10:28</b></h5>
                        </td>
                        <td className="p-2"> <button type="button" className="table-btn py-2 px-4">Claim</button></td>
                        <td className="p-2">
                           <a href="#" className="dots">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                           </a>
                        </td> */}
                     </tr>
                     <tr className="m-0">
                        <td className="p-2">
                           <h5><b>09/10/2021</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b>1.0 </b> MsDoge</h5>
                        </td>
                        <td className="p-2">
                           <h5><b>0.5%</b></h5>
                        </td>
                        <td className="p-2">
                           <h5>10 MSDOGE <br /> 10 LORIA</h5>
                        </td>
                        <td className="p-2">
                           <h5><b className="text-read red">30d 10:28</b></h5>
                        </td>
                        <td className="p-2"> <button type="button" className="table-btn py-2 px-4">Claim</button></td>
                        <td className="p-2">
                           <a href="#" className="dots">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                           </a>
                        </td>
                     </tr>
                     <tr className="m-0">
                        <td className="p-2">
                           <h5><b>09/10/2021</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b>1.0 </b> MsDoge</h5>
                        </td>
                        <td className="p-2">
                           <h5><b>0.5%</b></h5>
                        </td>
                        <td className="p-2">
                           <h5>10 MSDOGE <br /> 10 LORIA</h5>
                        </td>
                        <td className="p-2">
                           <h5><b className="text-read red">30d 10:28</b></h5>
                        </td>
                        <td className="p-2"> <button type="button" className="table-btn py-2 px-4">Claim</button></td>
                        <td className="p-2">
                           <a href="#" className="dots">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                           </a>
                        </td>
                     </tr>
                     <tr className="m-0">
                        <td className="p-2">
                           <h5><b>09/10/2021</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b>1.0 </b> MsDoge</h5>
                        </td>
                        <td className="p-2">
                           <h5><b>0.5%</b></h5>
                        </td>
                        <td className="p-2">
                           <h5>10 MSDOGE <br /> 10 LORIA</h5>
                        </td>
                        <td className="p-2">
                           <h5><b className="text-read green">Ready to claim</b></h5>
                        </td>
                        <td className="p-2 stake-btn"> <button data-bs-toggle="modal" data-bs-target="#claimCoinPopup" type="button" className="table-btn btn py-2 px-4">Claim</button></td>
                        <td className="p-2">
                           <a className="dots text-read" data-bs-toggle="modal" data-bs-target="#cancelStake">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                           </a>
                        </td>
                     </tr>
                     <tr className="m-0">
                        <td className="p-2">
                           <h5><b>09/10/2021</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b>1.0 </b> MsDoge</h5>
                        </td>
                        <td className="p-2">
                           <h5><b>0.5%</b></h5>
                        </td>
                        <td className="p-2">
                           <h5>10 MSDOGE <br /> 10 LORIA</h5>
                        </td>
                        <td className="p-2">
                           <h5><b className="text-read red">30d 10:28</b></h5>
                        </td>
                        <td className="p-2"> <button type="button" className="table-btn py-2 px-4">Claim</button></td>
                        <td className="p-2">
                           <a href="#" className="dots">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                           </a>
                        </td>
                     </tr>
                  </table>
                  <ul className="stake-list-sel fliter-box d-flex flex-wrap my-4 ls p-0 d-block d-md-none">
                     <li className="col mb-3 mb-md-0 me-3">
                        <select>
                           <option>Start date</option>
                           <option>Start date</option>
                           <option>Start date</option>
                        </select>
                        <h5 className="mt-3"><b>09/10/2021</b></h5>
                     </li>
                     <li className="col mb-3 mb-md-0 me-3 text-center">
                        <select>
                           <option>Amount of stake</option>
                           <option>Amount of stake</option>
                           <option>Amount of stake</option>
                        </select>
                        <h5 className="mt-3"><b>1.0 </b> MsDoge</h5>
                     </li>
                     <li className="col mb-3 mb-md-0 me-3 text-center">
                        <select>
                           <option>APY</option>
                           <option>APY</option>
                           <option>APY</option>
                        </select>
                        <h5 className="mt-3"><b>0.5%</b></h5>
                     </li>
                     <li className="col mb-3 mb-md-0 me-3 text-center">
                        <select>
                           <option>Amount of reward</option>
                           <option>Amount of reward</option>
                           <option>Amount of reward</option>
                        </select>
                        <h5 className="mt-3">MsDoge</h5>
                     </li>
                     <li className="col mb-3 mb-md-0 me-3 text-center">
                        <select>
                           <option>Remaining time</option>
                           <option>Remaining time</option>
                           <option>Remaining time</option>
                        </select>
                        <h5 className="mt-3"><b className="text-read red">30d 10:28</b></h5>
                     </li>
                     <li>
                        <button type="button" className="table-btn py-2 px-4">Claim</button>
                     </li>
                  </ul>

               </div>
            </div>
         </div>
         {/* Modal */}
         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
               <div class="modal-content icon-text-block-cri">
                  <div class="modal-body popup-card-container rel">
                     <button type="button" class="closebtn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center ">Transactions</h5>
                        <form action="">
                           <div className="input-bal">
                              <div className="inner-bore p-3">
                                 <div className="row">
                                    <div className="col-6">
                                       <h4 className="mb-3">Input</h4>
                                       <input type="text" className="input-box" placeholder="0.5" />
                                    </div>
                                    <div className="col-6 text-end">
                                       <h4 className="mb-3">Balance: 1.14005 URUS</h4>
                                       <div className="small-logo-photo d-flex justify-content-end">
                                          <img src={slogo} width="20" />
                                          <div style={{marginLeft: "10px"}}>MsDoge</div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row my-3">
                                 <div className="col-md-5">
                                    <div className="d-flex align-items-center sel-number-box">
                                       <div class="number me-3 d-flex justify-content-between">
                                          <span class="minus" onClick={(counter > 1 ? () => setCounter(counter - 1) : "")}>
                                             <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.75 0.25H11.25V1.75H0.75V0.25Z" fill="#161F2F" />
                                             </svg>
                                          </span>
                                          <input type="text" value={counter} />
                                          <span class="plus" onClick={() => setCounter(counter + 1)}>
                                             <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.25 5.25V0.75H6.75V5.25H11.25V6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25Z" fill="#161F2F" />
                                             </svg>
                                          </span>
                                       </div>
                                       <p>Months</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-12">
                                    <p className="d-flex mb-5 qu-text">
                                       <div className="icon-box me-2 d-flex">
                                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9C1.5 13.1423 4.85775 16.5 9 16.5C13.1423 16.5 16.5 13.1423 16.5 9C16.5 4.85775 13.1423 1.5 9 1.5C4.85775 1.5 1.5 4.85775 1.5 9ZM15 9C15 12.3137 12.3137 15 9 15C5.68629 15 3 12.3137 3 9C3 5.68629 5.68629 3 9 3C12.3137 3 15 5.68629 15 9ZM9.75 11.25V12.75H8.25V11.25H9.75ZM9.75029 10.5V10.0162C10.983 9.64878 11.7681 8.44242 11.6048 7.16651C11.4415 5.8906 10.3779 4.92085 9.09237 4.87572C7.80685 4.83059 6.6779 5.72339 6.42554 6.9847L7.89704 7.27945C8.01319 6.69834 8.56023 6.30696 9.14773 6.38467C9.73522 6.46237 10.1617 6.9825 10.1228 7.57383C10.0839 8.16517 9.5929 8.62492 9.00029 8.62495C8.58607 8.62495 8.25029 8.96074 8.25029 9.37495V10.5H9.75029Z" fill="#171717" />
                                          </svg>
                                       </div>
                                       You can stake from 1 month to 7 years</p>
                                    <div className="apy-box rel px-3 py-4 text-center">
                                       <h4 className="green-box">0.5% APY</h4>
                                       <p>The APY is calculated by multiplying the amount of months staked with 0.5. Maximum of 20% APY. Please note that cancelling the stake early will penalize you. Refer to our documentation: <a href="#" className="click-btn">Click Here</a> </p>
                                    </div>
                                    <button className="mt-3 approve-btn text-white text-center py-4 w-100">Approve 0.5 URUS</button>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Modal */}
         <div class="modal fade" id="connectWallet" tabindex="-1" aria-labelledby="connectWallet" aria-hidden="true">
            <div class="modal-dialog">
               <div class="modal-content gray-bg">
                  <div class="modal-body popup-card-container rel">
                     <button type="button" class="closebtn" data-bs-dismiss="modal" aria-label="Close" style={{ right: "15px" }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M10.0001 8.82227L14.1251 4.69727L15.3034 5.8756L11.1784 10.0006L15.3034 14.1256L14.1251 15.3039L10.0001 11.1789L5.87511 15.3039L4.69678 14.1256L8.82178 10.0006L4.69678 5.8756L5.87511 4.69727L10.0001 8.82227Z" fill="black" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center ">Connect to wallet</h5>
                        <form action="">
                           <div className="input-bal">
                              <div className="row">
                                 <div className="mb-4 col-sm-12">
                                    <div className="connect-wallet-login-border d-flex">
                                       <img src={metamask} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }} onClick={ handleConnectMetamaskWallet }>Metamask</div>
                                    </div>
                                    
                                    <div className="connect-wallet-login-border d-flex">
                                       <img src={wallet} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }} onClick={ handleConnectWalletConnect }>WalletConnect</div>
                                    </div>

                                    <div className="connect-wallet-login-border d-flex">
                                       <img src={coin} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }} onClick={ handleConnectFortmatic }>Coinbase</div>
                                    </div>

                                    <div className="connect-wallet-login-border d-flex">
                                       <img src={fortmatic} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }} onClick={ handleConnectPortis }>Fortmatic</div>
                                    </div>

                                    <div className="connect-wallet-login-border d-flex">
                                       <img src={metamask} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }}>Portis</div>
                                    </div>
                                 </div>

                                 <div className="col-sm-12">
                                    <div className="connect-wallet-popup text-center">
                                       <small><p>New to Ethereum? <a href="#" className="click-btn"> Learn more about MsDoge</a> </p></small>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Modal */}

         <div class="modal fade" id="claimCoinPopup" tabindex="-1" aria-labelledby="claimCoinPopup" aria-hidden="true">
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-body popup-card-container rel">
                     <button type="button" class="closebtn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center ">Claim</h5>
                        <form action="">
                           <div className="input-bal">
                              <div className="row">
                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Pool reward</small></div>
                                    <div><small>1.14005 URUS</small></div>
                                 </div>

                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Penalty Pool reward</small></div>
                                    <div><small>Balance: 1.14005 URUS</small></div>
                                 </div>
                                 <div className="col-sm-12">
                                    <div className="p-2 stake-btn">
                                       <button type="button" className="table-btn btn py-2 px-4 w-100 mb-3">Claim</button>
                                       <div className="claim-btn-failed color5 py-2 px-4 w-100 text-center"><b>Transcation failed</b></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Modal */}

         <div class="modal fade" id="cancelStake" tabindex="-1" aria-labelledby="cancelStake" aria-hidden="true">
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-body popup-card-container rel">
                     <button type="button" class="closebtn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center ">Stake Settings</h5>
                        <form action="">
                           <div className="input-bal">
                              <div className="row">
                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Pool reward</small></div>
                                    <div><small>1.14005 URUS</small></div>
                                 </div>

                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Pool Stake</small></div>
                                    <div><small>Balance: 1.14005 URUS</small></div>
                                 </div>

                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Penalty Pool reward</small></div>
                                    <div><small>Balance: 1.14005 URUS</small></div>
                                 </div>
                                 <div className="col-sm-12">
                                    <div className="p-2 stake-btn">
                                       <button type="button" className="table-btn color5 py-2 px-4 w-100 mb-3">Cancel Stake</button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </React.Fragment>
   )
}

