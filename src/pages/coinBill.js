import React from 'react'
import Navbar from "../components/layout/Navbar";
import TotalMarketInfo from '../components/TotalMarketInfo/index';

import Footer from '../components/layout/Footer';

export default function coinBill() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="coin-main py-60 ms">
                <div className="container-lg">
                    <div className="row">
                    <TotalMarketInfo />
                        <div className="col-md-5 col-lg-4">
                            <div className="gray-bg ms p-4 mb-4 mb-md-0">
                                <div className="acc-heading-text">
                                    <h6 className="mb-3">Account balance</h6>
                                    <div className="d-flex align-items-end">
                                        <h2 className="color-primary">1.14005 </h2>
                                        <div style={{ marginLeft: "15px" }}>MSDOGE</div>
                                    </div>
                                    <h4 className="mb-2 mt-2 color-primary">0.0448859 <span>LORIA</span></h4>
                                    <h5 className="mb-3">0.0448859  <span>ETH</span></h5>
                                </div>
                                <div className="withdraw-text mb-2">
                                    <div className="row border-top">
                                        <div className="col-6 py-2">
                                            <h3>0 <span> MSDOGE</span></h3>
                                        </div>
                                        <div className="col-6 py-2 text-end">
                                            <h3><span>Staked in total</span></h3>
                                        </div>
                                    </div>
                                    <div className="row border-top">
                                        <div className="col-6 py-2">
                                            <h3>0 <span> MSDOGE</span></h3>
                                        </div>
                                        <div className="col-6 py-2 text-end">
                                            <h3><span>Unclaimed reward</span> </h3>
                                        </div>
                                    </div>
                                    <div className="row border-top">
                                        <div className="col-6 py-2">
                                            <h3>0 <span> MSDOGE</span></h3>
                                        </div>
                                        <div className="col-6 py-2 text-end">
                                            <h3><span>Unclaimed reward</span></h3>
                                        </div>
                                        <div className="col-6 py-3 text-center">
                                            <button type="button" className="withdraw-btn mx-auto py-3 px-5">
                                                Unstake
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
                        </div>
                        <div className="col-md-7 col-lg-8">
                            <div className="list-stake ms">
                                <div className="d-flex justify-content-between">
                                    <div className="heading-text-stake ms">
                                        <h2>MsDoge Staking</h2>
                                        <p>List of stakes below</p>
                                    </div>
                                    <div className="">
                                        <div className="stake-btn">
                                            <a className="btn color-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Stake</a>
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
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
