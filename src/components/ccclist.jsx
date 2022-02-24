import React, { useEffect, useState } from "react";
import axios from 'axios';
import Colleges from "./colleges";
import Row from 'react-bootstrap/Row';


const CccList =()=> {
    const [Data,setDetail]=useState({
        CollegeID: '',
        DistrictID: '',
        CollegeName: '',
        City: '',
        County: '',
        Website: '',
        Logo: ''
    })
    const [collegeData,setCollegeDetail]=useState([])

    const sourceAPI = 'api.cccco.edu'
    useEffect(() => {
        axios.get('https://'+sourceAPI+'/colleges')
            .then(res=>{
                console.log('filtering: ' + res.data.length + ' items.');

                let cccData=res.data;
                setDetail({
                    CollegeID:cccData.CollegeID,
                    DistrictID:cccData.DistrictID,
                    CollegeName:cccData.CollegeName,
                    City:cccData.City,
                    County:cccData.County,
                    Website:cccData.WebsiteURL,
                    Logo:cccData.LogoURL
                })
                setCollegeDetail(res.data)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])

    return (
        <React.Fragment>
            <p>(source:  {sourceAPI})</p>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                <Colleges data={collegeData}/>
            </Row>
        </React.Fragment>
    )
}

export default CccList;