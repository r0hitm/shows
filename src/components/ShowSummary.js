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
        <div className="container">
            <h1>{show.show.name}</h1>
            <img src={show.show.image?.medium} alt="" />
            {/* The show summary is formatted using html tags so don't need to explicity use <p> here */}
            <div dangerouslySetInnerHTML={{ __html: show.show.summary }}></div>
            <button className="btn btn-primary" onClick={hideSummary}>
                Hide Summary
            </button>
            <button
                className="btn btn-primary"
                onClick={() => setIsModalOpen(true)}
            >
                Book Movie Ticket
            </button>

            {isModalOpen && (
                <dialog open>
                    <form onSubmit={handleSubmit}>
                        <h2>{show.show.name}</h2>
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
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </dialog>
            )}
        </div>
    );
}
