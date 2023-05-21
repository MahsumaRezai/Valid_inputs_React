
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
const ErroModal = (props) => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onconfirm} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h1>{props.title}</h1>
                </header>
                <div className={classes.content}>
                    <p>{props.massage}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onconfirm}>Okay</Button>
                </footer>
            </Card>
        </div>
    )
}
export default ErroModal;