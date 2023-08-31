import "./Features.css"

interface Props {
    image: string;
    heading: string;
    content: string;
}

function Features({ image, heading, content }: Props) {
    return (
        <div className="Features-container">
            <img src={image} alt="feature logo"></img>
            <h4>{heading}</h4>
            <p>{content}</p>
        </div>
    )
}

export default Features;