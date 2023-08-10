function ImageItem({image}) {
    return ( <div>
        <img className="image-list-img" src={image.urls.small}></img>
    </div> );
}

export default ImageItem;