import "./about.css";
import { useState } from "react";

const About = () => {
    const [visible, setVisible] = useState(false);

    const showEmail = () =>[
        setVisible(true)
    ];

    const hideEmail = () => {
        setVisible(false)
    }

    const getContent = () => {
        if (visible) {
            return <div className="about">
            <h6>TonyLane2017@gmail.com</h6>
            <button onClick={hideEmail} className="btn btn-info">Hide Info</button>
            </div>
        } else {
            return <div className="about">
                    <h6>Click the button below</h6>
                    <button onClick={showEmail} className="btn btn-primary">Show Info</button>
                    </div>
        }
    }

    return (
        <div className="about-page">
            <h1>Anthony Lane</h1>
            {getContent()}

          {/* { visible ? <h6>TonyLane2017@gmail.com</h6>: "click the button below"}
           { !visible ? <button onClick={showEmail} className="btn btn-primary">Show Info</button> :null } 


           {/*the button !visible means not-visible in case of mnot visible being false-display is null i.e. non existent*/}
        </div>
    )
}
export default About;