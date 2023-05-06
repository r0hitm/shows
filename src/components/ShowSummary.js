import { useState } from "react";
import "../styles/ShowSummary.css";

export default function ShowSummary({
    show,
    hideSummary,
    handleTicketBooking,
    ticketData
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="show">
            <img className="show-img" src={show.show.image?.medium} alt="" />
            <div>
                <h2 className="show-name">{show.show.name}</h2>
                {/* The show summary is formatted using html tags so don't need to explicity use <p> here */}
                <div
                    className="show-summary"
                    dangerouslySetInnerHTML={{ __html: show.show.summary }}
                ></div>
                <div className="show-rating">
                    <span>Rating: {show.show.rating.average}</span>
                </div>
                <div className="show-language">
                    <span>Language: {show.show.language}</span>
                </div>
                <div className="btn-group">
                    <button onClick={hideSummary}>Hide Summary</button>
                    <button onClick={() => setIsModalOpen(true)}>
                        Book Movie Ticket
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <dialog className="modal" open>
                    <form
                        className="ticket-booking-form"
                        onSubmit={event => {
                            handleTicketBooking(event);
                            setIsModalOpen(false);
                        }}
                    >
                        <h3>Book Your Ticket</h3>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                defaultValue={ticketData.name}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                defaultValue={ticketData.email}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number_of_tickets">
                                Number of Tickets
                            </label>
                            <input
                                type="number"
                                name="number_of_tickets"
                                id="number_of_tickets"
                                className="form-control"
                                defaultValue={ticketData.number_of_tickets}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="btn-group">
                            <button type="submit">Submit</button>
                            <button onClick={() => setIsModalOpen(false)}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </dialog>
            )}
        </div>
    );
}
