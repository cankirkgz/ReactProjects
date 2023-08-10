function Course({id, content, title, price, removeCourse}) {
    return ( 
    <div className="course-card">
        <div className="card-title-price">
            <h2 className="card-title">{title}</h2>
            <h4 className="card-price">{price} TL</h4>
        </div>
        <p>{content}</p>
        <button className="card-button" onClick={()=>removeCourse(id)}>Sil</button>
    </div> 
    );
}

export default Course;