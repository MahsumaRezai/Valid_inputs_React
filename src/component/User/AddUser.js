import React, { useState, useRef } from 'react';
import ErrorModal from '../UI/ErrorModal.js';
import Card from '../UI/Card';
import Wrap from '../Helper/Wrap.js';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        const enterdName = nameInputRef.current.value;
        const enterdUserAge = ageInputRef.current.value;

        if (enterdName.trim().length === 0 || enterdUserAge.trim().length === 0) {
            setError({
                title: "Invalid Name",
                massage: "Please enter a valid name"
            })
            return;
        }
        if (+enterdUserAge < 1) {
            setError({
                title: "Invalid Age",
                massage: "Please enter a valid age"
            })
            return;
        }
        props.onAddUser(enterdName, enterdUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = ''

    };
    const erroHandler = () => {
        setError(null)
    }
    return (
        <Wrap>
            {error && <ErrorModal title={error.title} massage={error.massage} onconfirm={erroHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrap>
    );
};

export default AddUser;