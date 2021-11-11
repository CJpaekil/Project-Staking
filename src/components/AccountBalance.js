import React from 'react'
export default function AccountBalance() {
return (
<React.Fragment>
   <div className="gray-bg ms p-4 mb-4 mb-md-0">
      <div className="acc-heading-text ms">
         <h6 className="mb-3">Account balance</h6>
         <h2>1.14005 <span>URUS</span></h2>
         <h4 className="mb-2">0.0448859 <span>ETH</span></h4>
         <h5>0 <span>URUS-ETH LP</span></h5>
      </div>
      <div className="withdraw-text ms mt-4">
         <div className="row border-top">
            <div className="col-6 py-2">
               <h3>0 <span>URUS</span></h3>
            </div>
            <div className="col-6 py-2 text-end">
               <h3><span>Staked in total</span></h3>
            </div>
         </div>
         <div className="row border-top">
            <div className="col-6 py-2">
               <h3>0 <span>URUS-ETH LP</span></h3>
            </div>
            <div className="col-6 py-2 text-end">
               <h3><span>Deposited tokens</span> </h3>
            </div>
            <div className="col-12 py-3 text-center">
               <button type="button" className="withdraw-btn mx-auto py-3 px-5">
               Unstake
               </button>
            </div>
         </div>
         <div className="row border-top">
            <div className="col-6 py-2">
               <h3>0 <span>URUS</span></h3>
            </div>
            <div className="col-6 py-2 text-end">
               <h3><span>Unclaimed reward</span></h3>
            </div>
            <div className="col-6 py-3 text-center">
               <button type="button" className="withdraw-btn mx-auto py-3 px-5">
               Claim
               </button>
            </div>
            <div className="col-6 py-3 text-center">
               <button type="button" className="withdraw-btn mx-auto py-3 px-5">
               Stake
               </button>
            </div>
         </div>
      </div>
   </div>
</React.Fragment>
)
}

