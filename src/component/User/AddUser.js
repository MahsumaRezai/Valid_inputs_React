import Card from '../UI/Card';
const AddUser = props => {
    const addUserHandler = (event) => {
        event.preventDefault()

    }
    return (
        <Card>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
                <label htmlFor="age">Age</label>
                <input type="number" id="age" />
                <button type="submit">AddUser</button>
            </form>
        </Card>
    )

}
export default AddUser