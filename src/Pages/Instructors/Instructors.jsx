import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';
import Loader from '../../components/Loader/Loader';

const Instructors = () => {
    const [loading,setLoading] = useState(false)
    const [instructors,setInstructors] = useState([]);
    useEffect(()=>{
        const url = 'http://localhost:5000/instructors'
        setLoading(true)
        axios.get(url)
        
        .then(res=>{
           setInstructors(res.data);
           setLoading(false)
        })
        .catch(error => {
            console.error(error)})
    },[])

    if (loading) {
        return <Loader />
      }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-6 pt-16'>
            {
                instructors.map(instructor=><InstructorCard
                key={instructor._id}
                instructor = {instructor}
                
                />)
            }
      
        </div>
    );
};

export default Instructors;