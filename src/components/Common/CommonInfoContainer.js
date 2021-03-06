import React from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/fontawesome-free-solid'

function CommonInfoContainer({topicName, topicDescription, notesFileName, notesFile}){
        return(
            <>
            <h2 className='p-3'>
                {topicName} <a href={notesFile}  rel="noreferrer" className="text-decoration-none"><FontAwesomeIcon icon={faDownload} /></a>
            </h2>
            <Container fluid className='p-5 pt-0 pb-0'>
                
                {topicDescription?.meaning && <p>{topicDescription.meaning}</p>}
                {topicDescription?.desc && <p>{topicDescription.desc}</p>}
                {topicDescription?.formula && 
                    <div className='mt-2 bg-light rounded border p-2'>
                        <b>{topicDescription.formula}</b>
                    </div>
                }
                {topicDescription?.applications && 
                    <>
                        <h4 className='mt-4'>Applications</h4>
                        {topicDescription?.applications.map((application, i) =>
                            <li key={i}>{application}</li> 
                        )}
                    </>
                }
                {topicDescription?.complexity &&
                    <>
                        <h4 className='mt-4'>Complexity</h4>
                        <p className='mt-3'><b>Time Complexity:</b> {topicDescription.complexity.timeComplexity}</p>
                        <p className='mt-3'><b>Space Complexity:</b> {topicDescription.complexity.spaceComplexity}</p>
                    </>
                }
                
            </Container>
            </>
        );
}
export default CommonInfoContainer;