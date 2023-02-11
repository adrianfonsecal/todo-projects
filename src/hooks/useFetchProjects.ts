import { useEffect, useState } from "react"
import { getProjects } from "../helpers/getProjects";
import { Project } from "../interfaces/projects"

export interface State {
    projects: Project[],
    loading: boolean,
}

export const useFetchProjects = () => {

    const [state, setState] = useState<State>({
        projects: [],
        loading: true,
    });

    const updateStateBeforePromise = (projectObject: Project[]) => {
        setState({
            projects: projectObject,
            loading: false,
        });
    }

    useEffect(() => {
        getProjects()
        .then(updateStateBeforePromise);
    }, []);

    return state;
}
