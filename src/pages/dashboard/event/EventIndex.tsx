import { Link } from "react-router-dom";

export default function EventIndex() {
    return(
        <div>
            <h1 className="mb-6">Ini Halaman Event</h1>
            <Link to="/dashboard/event/create" className="bg-red-900 rounded-2xl p-2 text-white">Create New</Link>
        </div>
    );

};