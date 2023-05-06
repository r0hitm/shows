import { useState } from "react";
import "../styles/ShowSummary.css";

export default function ShowSummary({ show, hideSummary }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState(
        JSON.parse(localStorage.getItem("formData")) || {
            name: "",
            email: "",
            number_of_tickets: "",
        }
    );

    const handleSubmit = event => {
        event.preventDefault();
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        // Save the form data to local storage here
        setIsModalOpen(false);
        localStorage.setItem("formData", JSON.stringify(formData));
    };

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
                        onSubmit={handleSubmit}
                    >
                        <h3>Book Your Ticket</h3>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                defaultValue={formData.name}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                defaultValue={formData.email}
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
                                defaultValue={formData.number_of_tickets}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                className="form-control"
                            />
                        </div>
                        <div className="btn-group">
                            <button>Submit</button>
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
