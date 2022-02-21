import React, {useState, useEffect} from "react";
import { useDispatch} from "react-redux";
import { updateTutorial, deleteTutorial} from "../actions/tutorials";
import TutorialService from "../services/TutorialService";

const Tutorial = (props) => {
    const initialTutorialState = {
        id: null,
        title: "",
        description: "",
        published: false
    };

    const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const getTutorial = id => {
        TutorialService.get(id)
            .then(response => {
                setCurrentTutorial(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
    };


}

export default Tutorial;