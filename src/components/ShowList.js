export default function ShowList({ shows, handleShowSummary }) {
    return (
        <ul className="list-group">
            {shows.map(show => (
                <li className="list-group-item" key={show.show.id}>
                    <h2>{show.show.name}</h2>
                    <img src={show.show.image?.medium} alt="" />
                    {/* <p>{show.show.summary}</p> */}
                    <button
                        className="btn btn-primary"
                        onClick={_ => handleShowSummary(show.show.id)}
                    >
                        Show Summary
                    </button>
                </li>
            ))}
        </ul>
    );
}
