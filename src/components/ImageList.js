import ImageShow from './ImageShow';

function ImageList({ images }) {

    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    });
    return (
        <div>
            <div>
                {renderedImages}
            </div>
            
        </div>

    )
}

export default ImageList;