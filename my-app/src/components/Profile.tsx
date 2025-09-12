import "./Profile.css"

function Profile() {
    return (
        <div className="container">
            <h1>Ksaveri Petrov</h1> 
            <ul>
                <li>Cooking</li>
                <li>MMA</li>
                <li>Beer</li>
                <li>Rap music</li>
            </ul>
            <form>
                <input type="email" placeholder="Your email" />
                <textarea placeholder="Your message"></textarea>
                <button>Call to Action</button>
            </form>
        </div>
    )
}

export default Profile