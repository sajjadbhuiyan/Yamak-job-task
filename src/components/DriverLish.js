import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import {feather} from 'react-icons-kit/feather'
import Home from './Home'

export const DriverLish = ({drivers,deleteDriver}) => {

    const editDriver = (editID) =>{
        <Home editID={editID}></Home>
        console.log(editID)
    }
    
    return drivers.map(driver=>(
        
        <tr>
            <td>{driver.firstName}</td>
            <td>{driver.lastName}</td>
            <td>{driver.dob}</td>
            <td>{driver.license}</td>
            <td>{driver.email}</td>
            <td>{driver.phone}</td>
            <td>{driver.expireDate}</td>
            <td className='delete-btn' onClick={()=>deleteDriver(driver.isbn)}>
                <Icon icon={trash}/>
            </td> 
            <td className='delete-btn' onClick={()=>editDriver(drivers)}>
                <Icon icon={feather}/>
            </td>           
        </tr>            
    
))
}
