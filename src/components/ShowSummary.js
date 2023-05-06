export default function ShowSummary({ show, hideSummary }) {
    return (
        <div className="container">
            <h1>{show.show.name}</h1>
            <img src={show.show.image?.medium} alt="" />
            <p>{show.show.summary}</p>
            <button
                className="btn btn-primary"
                onClick={hideSummary}
            >
                Hide Summary
            </button>
        </div>
    );
}