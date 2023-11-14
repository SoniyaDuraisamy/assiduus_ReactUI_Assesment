import React from "react";
import './Account.css'
import { useDispatch, useSelector } from "react-redux";
import { AccountReport } from '../redux/action/MonthlyReportAction'
const Account = () => {

    let Account = [
        {
            catagory: ["Account", "This Month", "YTD"],
            items: [
                {
                    account: "sales",
                    ThisMonth: "1194.50",
                    YTD: "11,419.00"
                },
                {
                    account: "Advertising",
                    ThisMonth: "6,879.02",
                    YTD: "9,271.36"
                },
                {
                    account: "Inventory",
                    ThisMonth: "4,692.26",
                    YTD: "9,768.09"
                },
                {
                    account: "Entertainment",
                    ThisMonth: "0.00",
                    YTD: "0.00"
                },
                {
                    account: "Product",
                    ThisMonth: "4,625.10",
                    YTD: "2,529.90"
                },
            ]
        }
    ]
    let dispatch = useDispatch()
    dispatch(AccountReport(Account));
    let Accounts = useSelector((state) => state.allReport.Account)

    return (
        <>
            <div className="row Account-Latout">
                <div className="Account-Heading col">
                    <h6>
                        Account watchlist
                    </h6>
                </div>
                <hr />
                <div> <table className="w-100  col"><tr className=" heading-color col"  >
                    {Accounts[0].catagory.map((heading, index) => {
                        return (
                            <th className={index == 0 && `col-7`} >
                                {heading}
                            </th>
                        )
                    })}
                </tr>
                    {Accounts[0].items.map(report => {
                        return (
                            <tr className="col  ">
                                <td className="table-layout">
                                    {report.account}
                                </td>
                                <td className="table-layout">
                                    {report.ThisMonth}
                                </td>
                                <td className="table-layout">
                                    {report.YTD}
                                </td>
                            </tr>
                        )
                    }
                    )}
                </table>
                </div>
            </div>
        </>
    )
}
export default Account;