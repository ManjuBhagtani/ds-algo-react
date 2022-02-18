import React from 'react';
import UIConstants from '../Constants/UIConstants';
import CommonInfoContainer from '../Common/CommonInfoContainer';
import ProblemContainer from '../Common/ProblemContainer';
import NotesFile from '../../assets/Bits_1.pdf';
import Tricks from '../Common/Tricks';

function BitManipulation(){
        return(
            <div className="p-3">
                <CommonInfoContainer
                    topicName={UIConstants.topicNames.BITMANIPULATION}
                    topicDescription={UIConstants.topicDescriptions.BITMANIPULATION}
                    notesFileName={UIConstants.notesFileNames.BITMANIPULATION}
                    notesFile={NotesFile}
                />
                <Tricks
                    tricks={UIConstants.tricks.BITMANIPULATION}
                />
                <ProblemContainer
                    problems={UIConstants.problems.BITMANIPULATION}
                />
            </div>
        );
}
export default BitManipulation;