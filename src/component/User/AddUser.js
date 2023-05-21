import Card from '../UI/Card';
import Button from '../UI/Button.js'
import classes from './AddUser.module.css';
import { useState } from 'react';
const AddUser = props => {
    const [enterdUsername, setEnterdUsername] = useState('');
    const [enterdAge, setEnterdAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enterdUsername.trim().length === 0 || enterdAge.trim().length === 0) {
            return;
        }
        if (+enterdAge < 1) {
            return;
        }
        console.log(enterdUsername);
        console.log(enterdAge);
        setEnterdUsername('');
        setEnterdAge('')


    }
    const usernameChangeHandler = (event) => {
        setEnterdUsername(event.target.value)

    }
    const ageChangeHandler = (event) => {
        setEnterdAge(event.target.value)

    }
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={enterdUsername} onChange={usernameChangeHandler} />
                <label htmlFor="age">Age</label>
                <input type="number" id="age" value={enterdAge} onChange={ageChangeHandler} />
                <Button type="submit">AddUser</Button>
            </form>
        </Card>
    )

}
export default AddUser