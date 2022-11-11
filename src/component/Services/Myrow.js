import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Myrow = ({ mail }) => {

    const { user } = useContext(AuthContext)
    const { NameofService, comment, customer, email } = mail;
    return (
        <div>
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
                            <h1>Comment</h1>
                            <div className="font-bold">{NameofService}</div>

                        </div>
                    </div>
                </td>
                <td>
                    yourname
                    <br />
                    <span className="badge badge-ghost badge-sm">{customer}</span>
                </td>

            </tr>
        </div>
    );
};

export default Myrow;