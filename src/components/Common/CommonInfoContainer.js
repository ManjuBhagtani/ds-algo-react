import React from 'react';
import Container from 'react-bootstrap/Container';

function CommonInfoContainer({topicName, topicDescription}){
        return(
            <>
            <h2 className='p-3'>{topicName}</h2>
            <Container fluid className='p-5 pt-0'>
                
                {topicDescription.meaning && <p>{topicDescription.meaning}</p>}
                {topicDescription.desc && <p>{topicDescription.desc}</p>}
                {topicDescription.formula && <p><b>{topicDescription.formula}</b></p>}
                {topicDescription.applications && 
                    <h4>Applications</h4>}
                    {topicDescription.applications.map((application, i) =>
                        <li key={i}>{application}</li> 
                    )}
                {topicDescription.complexity &&
                    <>
                        <h4 className='mt-3'>Complexity</h4>
                        <p className='mt-3'><b>Time Complexity:</b> {topicDescription.complexity.timeComplexity}</p>
                        <p className='mt-3'><b>Space Complexity:</b> {topicDescription.complexity.spaceComplexity}</p>
                    </>
                }
                
            </Container>
            </>
        );
}
export default CommonInfoContainer;