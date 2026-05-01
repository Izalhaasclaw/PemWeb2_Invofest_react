import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return(
        <div className="flex w-full min-h-screen">
            <div className="bg-blue-900 w-64 flex">
                <div>

                </div> 
                    
                <div>

                </div>

                <div>

                </div>             
            </div>
                <button>

                </button>
            <div>
                <Outlet />
            </div>
        </div>
    );
}