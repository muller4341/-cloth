import Sidebar from '../Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Addproduct from '../Addproduct/Addproduct'
import Productlist from '../Productlist/Productlist'

const Admin = () => {
    return (
        <div className=' h-auto w screen bg-gray-50 flex flex-row  '>
            <Sidebar/>
            <Routes>
                <Route path='/addproduct' element={<Addproduct/>}/>
                <Route path='/productlist' element={<Productlist/>}/>  
            </Routes> 
        </div>
    )
}

export default Admin