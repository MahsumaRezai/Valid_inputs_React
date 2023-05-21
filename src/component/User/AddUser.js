import Card from '../UI/Card';
import Button from '../UI/Button.js'
import classes from './AddUser.module.css';
const AddUser = props => {
    const addUserHandler = (event) => {
        event.preventDefault()

    }
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
                <label htmlFor="age">Age</label>
                <input type="number" id="age" />
                <Button type="submit">AddUser</Button>
            </form>
        </Card>
    )

}
export default AddUser