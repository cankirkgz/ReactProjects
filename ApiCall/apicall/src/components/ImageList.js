import ImageItem from "./ImageItem";

function ImageList({imagesPlaceHolder}) {
    return ( 
    <div className="image-list">
        {
            imagesPlaceHolder.map((image, index) => {
               return <ImageItem key={index} image={image}></ImageItem>;
            })
        }
    </div> );
}

export default ImageList;