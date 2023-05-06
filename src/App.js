import React, { useState, useEffect } from "react";
import ShowList from "./components/ShowList";
import ShowSummary from "./components/ShowSummary";

function App() {
    // shows is an array of objects that will be fetched from the API
    const [shows, setShows] = useState([]);

    // another state to store which show is selected and display its summary
    const [selectedShow, setSelectedShow] = useState(null);

    // Fetch the shows from the given API
    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then(response => response.json())
            .then(data => setShows(data))
            .catch(error => console.log(error));
    }, []);

    if (selectedShow) {
        const show = shows.find(show => show.show.id === selectedShow);
        return (
            <ShowSummary
                show={show}
                hideSummary={_ => setSelectedShow(null)}
                selectedShow={selectedShow}
            />
        );
    } else {
        return (
            <div className="container">
                <h1>TV Shows</h1>
                <ShowList
                    shows={shows}
                    handleShowSummary={showId => setSelectedShow(showId)}
                    selectedShow={selectedShow}
                />
            </div>
        );
    }
}

export default App;
