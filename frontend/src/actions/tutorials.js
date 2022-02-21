import {
    CREATE_TUTORIAL,
    RETRIEVE_TUTORIALS,
    UPDATE_TUTORIAL,
    DELETE_ALL_TUTORIALS,
    DELETE_TUTORIAL
} from "./type";
import TutorialService from "../services/TutorialService";

export const createTutorial = (title, description) => async(dispatch) =>{
    try{
        const res = await TutorialService.create({title, description});
        dispatch({
            type: CREATE_TUTORIAL,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    }catch(err){
        return Promise.reject(err);
    }
};

export const retrieveTutorials = () => async(dispatch) => {
    try{
        const res = await TutorialService.getAll();
        dispatch({
            type: RETRIEVE_TUTORIALS,
            payload: res.data,
        });
    }catch(err){
        console.log(err);
    }
};

export const updateTutorial = (id, data) => async(dispatch) => {
    try{
        const res = await TutorialService.update(id,data);
        dispatch({
            type: UPDATE_TUTORIAL,
            payload: data,
        })
        return Promise.resolve(res.data);
    }catch(err){
        return Promise.reject(err);
    }
};

export const deleteTutorial = (id) => async(dispatch)=> {
    try{
        await TutorialService.remove(id);
        dispatch({
            type: DELETE_TUTORIAL,
            payload : {id},
        });
    }catch(err){
        console.log(err);
    }
};

export const deleteAllTutorials = () => async (dispatch) => {
    try{
        const res = await TutorialService.removeAll();
        dispatch({
            type: DELETE_ALL_TUTORIALS,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    }catch(err){
        return Promise.reject(err);
    }
};

export const findTutorialsByTitle = (title) => async(dispatch)=>{
    try{
        const res = await TutorialService.findByTitle(title);
        dispatch({
            type: RETRIEVE_TUTORIALS,
            payload: res.data,
        });
    }catch(err){
        console.log(err);
    }
};