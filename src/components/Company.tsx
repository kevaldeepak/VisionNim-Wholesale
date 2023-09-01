import "./Company.css";

interface Props {
    name: string,
    image: string
}

function Company({ name, image }: Props) {
    return (
        <div className="company-container">
            <div className='logo-container'>
                <img src={image} alt='company logo' />
            </div>
            <div className='text-container'>
                <h1>{name}</h1>
            </div>
        </div>
    );
}

export default Company;
