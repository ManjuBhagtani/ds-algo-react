import React from 'react';
import { Accordion } from 'react-bootstrap';
function ProblemContainer({problems}){
    return(
        <div className="mt-4" style={{paddingLeft: '50px'}}>
            <h4>Problems</h4>
            <Accordion className="pt-2">
                {problems?.map((problem, i) => 
                    <Accordion.Item eventKey={i} className='mb-2' key={i}>
                        <Accordion.Header><a href={problem?.link} className="text-decoration-none">{problem?.questionTitle}</a></Accordion.Header>
                        <Accordion.Body>
                            <div>
                                {problem?.questionDesc}
                            </div>
                            {problem?.note && 
                                <div className='mt-2'>
                                    <h6>NOTE: </h6>
                                   <p>{problem.note}</p> 
                                </div>
                            }
                            {problem?.constraints &&
                                <div className='mt-2'>
                                    <h6>Constraints: </h6>
                                    {problem.constraints.map((constraint, i) => 
                                       <p key={i}>{constraint.constraint}</p> 
                                    )}
                                </div>
                            }
                            {problem?.inputFormat &&
                                <div className='mt-2'>
                                    <h6>Input Format: </h6>
                                    <p>{problem?.inputFormat}</p> 
                                </div>
                            }
                            {problem?.outputFormat &&
                                <div className='mt-2'>
                                    <h6>Output Format: </h6>
                                    <p>{problem?.outputFormat}</p> 
                                </div>
                            }
                             {problem?.examples &&
                                problem.examples.map((example, i) =>
                                    <div className='mt-2 ml-2' key={i}>
                                        <h6>Example {i+1}</h6>
                                        {"Input: "} {example.input} <br/>                
                                        {"Output: "} {example.output} <br/>   
                                        {"Explanation: "} {example.explanation}
                                    </div>
                                )
                                
                                
                            }
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
        </div>
    );
}

export default ProblemContainer;