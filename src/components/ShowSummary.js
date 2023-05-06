export default function ShowSummary({ show, hideSummary }) {
    return (
        <div className="container">
            <h1>{show.show.name}</h1>
            <img src={show.show.image?.medium} alt="" />
            {/* The show summary is formatted using html tags so don't need to explicity use <p> here */}
            <div dangerouslySetInnerHTML={{ __html: show.show.summary }}></div>
            <button className="btn btn-primary" onClick={hideSummary}>
                Hide Summary
            </button>
        </div>
    );
}
