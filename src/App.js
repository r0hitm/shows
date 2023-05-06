import React, { useState, useEffect } from "react";
import ShowList from "./components/ShowList";
import ShowSummary from "./components/ShowSummary";
import "./styles/App.css";

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
        return (
            <>
                <Header />
                <ShowSummary
                    show={selectedShow}
                    hideSummary={() => setSelectedShow(null)}
                />
                <Footer />
            </>
        );
    } else {
        return (
            <>
                <Header />
                <ShowList
                    shows={shows}
                    handleShowSummary={id =>
                        setSelectedShow(shows.find(show => show.show.id === id))
                    }
                />
                <Footer />
            </>
        );
    }
}

function Header() {
    return (
        <header>
            <h1>TV Shows</h1>
        </header>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <p>
                Made by Rohit Mehta &copy; 2023 |{" "}
                <a href="https://github.com/r0hitm/shows">View On GitHub</a>
            </p>
        </footer>
    );
}

export default App;
