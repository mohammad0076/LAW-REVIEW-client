import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';


const Orderrow = ({ order }) => {
    const { user } = useContext(AuthContext)
    const { NameofService, price, customer, email } = order;
    {
        console.log(order)
    }
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">

                    </div>
                    <div>
                        <div className="font-bold">{NameofService}</div>
                        <div className="text-sm opacity-50">{customer}</div>
                    </div>
                </div>
            </td>
            <td>
                {email}
                <br />
                <span className="badge badge-ghost badge-sm">{price} taka</span>
            </td>

        </tr>
    );
};

export default Orderrow;