import "../css/body.css"

function Body(){
    return (
        <div className="body">
            <div className="bg-white p-6 m-4 shadow rounded flex-1">
                <h2 className="text-xl font-semibold mb-4">Main Content Area</h2>
                <p>Real-time system data updates every second. You can add charts here!</p>
            </div>
        </div>
    )
}

export default Body