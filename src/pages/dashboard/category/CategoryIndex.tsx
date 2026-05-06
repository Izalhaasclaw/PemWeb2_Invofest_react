import { Link } from "react-router-dom";

export default function CategoryIndex() {
    return(
        <div>
            <h1 className="mb-6">Ini Halaman Category</h1>
            <Link to="/dashboard/category/create" className="bg-red-900 rounded-2xl p-2 text-white">Create New</Link>
        </div>
    );
};