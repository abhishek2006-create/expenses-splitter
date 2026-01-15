import {useLocation} from "react-router-dom"

export default function NextPage() {
    const location = useLocation();
    const {
        GroupName,
        EnterMember,
        TotalAmount,
        WhoPaidTotalAmount,
    } = location.state || {};
    return(
    <div>
        <h1>welcome</h1>
        <p>Group Name: {GroupName}</p>
        <p>Member: {EnterMember}</p>
        <p>Total Amount: ₹{TotalAmount}</p>
        <p>Paid By: {WhoPaidTotalAmount}</p>
    </div>
);
}
