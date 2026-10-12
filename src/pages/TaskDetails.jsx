import { useParams } from "react-router-dom";

function TaskDetails(){
    const {id}=useParams();
    return(
        <main className="p-6">
            <h1 className="text-3xl font-bold text-blue-600">Task Details</h1>
            <p className="mt-3 text-gray-600">
                Task ID: {id}
            </p>
        </main>
    )
}
export default TaskDetails;