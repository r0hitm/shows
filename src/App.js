import React, { useState, useEffect } from "react";
import ShowList from "./components/ShowList";
import ShowSummary from "./components/ShowSummary";
import "./styles/App.css";

function App() {
    // shows is an array of objects that will be fetched from the API
    const [shows, setShows] = useState([]);

    // another state to store which show is selected and display its summary
    const [selectedShow, setSelectedShow] = useState(null);

    // Dictionary to store all of the booked tickets
    // Key = showID, Value = {name, email, number_of_tickets, date}
    const [ticketData, setTicketData] = useState(
        JSON.parse(localStorage.getItem("ticketData")) || {}
    );

    // Fetch the shows from the given API
    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then(response => response.json())
            .then(data => setShows(data))
            .catch(error => console.log(error));
    }, []);

    // If a show is selected, display its summary
    function handleShowSummary(id) {
        const show = shows.find(show => show.show.id === id);
        setSelectedShow(show); // update the selectedShow state
    }

    // book ticket form is subitted, then save to local storage
    function bookTicket(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        // extract the form data from the form
        const formData = {};
        form.forEach(function (value, key) {
            formData[key] = value;
        });

        const newTicketData = {
            ...ticketData,
            [selectedShow.show.id]: formData,
        };

        // update the ticketData state
        setTicketData(newTicketData);

        // hide the summary
        setSelectedShow(null);

        // save the ticket data to local storage
        localStorage.setItem("ticketData", JSON.stringify(newTicketData));
    }

    if (selectedShow) {
        return (
            <>
                <Header />
                <ShowSummary
                    show={selectedShow}
                    hideSummary={() => setSelectedShow(null)}
                    handleTicketBooking={bookTicket}
                    ticketData={ticketData[selectedShow.show.id]}
                />
                <Footer />
            </>
        );
    } else {
        return (
            <>
                <Header />
                <ShowList shows={shows} handleShowSummary={handleShowSummary} />
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
