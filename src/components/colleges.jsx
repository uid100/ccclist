import React from 'react';
import Card from 'react-bootstrap/Card';

const Colleges=({data})=>{
    return(
        <>
            {
                data && data.map((d) => {
                    if( d.CollegeName.startsWith( 'P' )
                    // if( d.County.startsWith( 'San Diego' ) || d.County.startsWith( 'Orange' )
                        // || d.County.startsWith( 'Orange' ) )
                        // || d.County.startsWith( 'Imperial' ) 
                        // || d.County.startsWith( 'Riverside')
                        // || d.County.startsWith( 'San Berna')
                        // || d.County.startsWith( 'Los Ang')
                    )
                        return(
                            // <div className='card' key={d.CollegeID}>
                            <Card className="mx-4 border-primary" key={d.CollegeID}>
                                <Card.Header>
                                <img className='card-img-top' src="..." alt='logo'/>
                                </Card.Header>
                                <Card.Body>
                                    <h5 className='card-title'>{d.CollegeName}</h5>
                                    <p className='card-text'>({d.City})</p>
                                    <Card.Text>{d.DistrictID}.{d.CollegeID}:{d.County} County</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                })
            }
        </>
    )
}

export default Colleges