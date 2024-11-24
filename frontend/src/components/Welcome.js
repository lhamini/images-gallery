import React from "react";
import { Button } from "react-bootstrap";


const Welcome = () => {
    return (
        <div>
            <h1>Welcome to the Image Search App</h1>
            <p>This is a simple application that retreives photos from Unsplash API.
                In order to start enter any search term in the input field</p>
            <Button href="https://unsplash.com" target="_blank" variant="primary">Learn more</Button>
        </div>
    );
}

export default Welcome;