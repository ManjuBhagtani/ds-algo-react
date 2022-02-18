import React from "react";
import Container from "react-bootstrap/Container";

function Tricks({tricks}){
    return(
        <Container fluid className='p-5 pt-0 pb-0'>
            {tricks && 
                    <>
                        <h4 className='mt-4'>Tricks</h4>
                        {tricks.map((trick, i) =>
                            <li key={i}>{trick}</li> 
                        )}
                    </>
                }
        </Container>
    )
}

export default Tricks;