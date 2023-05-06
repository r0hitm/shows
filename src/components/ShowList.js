import "../styles/ShowList.css";

export default function ShowList({ shows, handleShowSummary }) {
    return (
        <ul className="show-list">
            {shows.map(show => (
                <li className="list-group-item" key={show.show.id}>
                    <img
                        className="show-img"
                        src={show.show.image?.medium}
                        alt="Show Thumbnail"
                    />
                    <div className="show-brief">
                        <h2 className="show-name">{show.show.name}</h2>
                        <div className="show-rating">
                            <span>Rating: {show.show.rating.average}</span>
                        </div>
                        <div className="show-genres">
                            <span>Genres: {show.show.genres.join(", ")}</span>
                        </div>
                        <div className="show-language">
                            <span>Language: {show.show.language}</span>
                        </div>
                        <button
                            className="btn btn-primary"
                            onClick={_ => handleShowSummary(show.show.id)}
                        >
                            Show Summary
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
