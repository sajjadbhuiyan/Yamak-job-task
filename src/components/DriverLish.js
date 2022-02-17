import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const DriverLish = ({drivers,deleteBook}) => {
    
    return drivers.map(driver=>(
        
        <tr>
            <td>{driver.firstName}</td>
            <td>{driver.lastName}</td>
            <td>{driver.dob}</td>
            <td>{driver.license}</td>
            <td>{driver.email}</td>
            <td>{driver.phone}</td>
            <td>{driver.expireDate}</td>
            <td className='delete-btn' onClick={()=>deleteBook(driver.isbn)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}
