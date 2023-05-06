import { useState } from "react";
import "../styles/ShowSummary.css";

export default function ShowSummary({ show, hideSummary }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleInputChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // Save the form data to local storage here
        setIsModalOpen(false);
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
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                        <button type="submit">Book Ticket</button>
                    </form>
                </dialog>
            )}
        </div>
    );
}
