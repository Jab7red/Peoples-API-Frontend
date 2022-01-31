import { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

const Main = (props) => {
    const [people, setPeople] = useState(null);

    // const URL = "https://jb-people-api.herokuapp.com/people/";
    const URL = "http://localhost:4000/people/";

    // fetch people data from backend
    const getPeople = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPeople(data);
    };

    const createPeople = async (person) => {
        // make post request to create people
        if(!props.user) return; // do not run any code in this function if there's no user
        const token = await props.user.getIdToken();
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(person),
        });
        // update list of people
        getPeople();
    };

    const updatePeople = async (person, id) => {
        //make put request to create people
        if(!props.user) return; // do not run any code in this function if there's no user
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/JSON",
            },
            body: JSON.stringify(person),
        });
        // update list of people
        getPeople();
    };

    const deletePeople = async (id) => {
        // make delete request to create people
        if(!props.user) return; // do not run any code in this function if there's no user
        await fetch(URL + id, {
            method: "DELETE",
        });
        // update list of people
        getPeople();
    }

    useEffect(() => getPeople(), []);

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index user={props.user} people={people} createPeople={createPeople} />
                </Route>
                <Route path="/people/:id" render={(rp) =>
                (props.user ? <Show
                    people={people}
                    updatePeople={updatePeople}
                    deletePeople={deletePeople}
                    {...rp}
                />
                    :
                    <Redirect to="/" />
                )} />
            </Switch>
        </main>
    )
}

export default Main;