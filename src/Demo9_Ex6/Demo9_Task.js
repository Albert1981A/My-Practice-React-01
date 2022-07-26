

function Demo9Task(props) {

    return (
        <div>
            <h5>Dynamic Render Task Header</h5>

            <span>Task Title:</span>{props.tasksData.title} <br />
            <span>Task Title:</span> { (props.tasksData.completed) ? <span>Completed</span> : <span>Not Completed</span> }


            <h5>Dynamic Render Task Footer</h5>
            <br />
        </div>
    );
}
export default Demo9Task;