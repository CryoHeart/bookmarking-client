import './About.css';
import pic from "./image.jpg";


let About = (): JSX.Element => {
    return (
        <div className="aboutDiv">
            <div className="textDiv">
                <h1>Hello! I'm a fullstack web developer.</h1>
                <p>My name is Omer Logan Cohen. I'm a fresh fullstack web developer living in Sderot.
                    Finished my developing course at John Bryce this year and looking for a job. <br /> <br />
                    My main uses are with React and Angular for client side. On the server side I use Node.js with MongoDB or MySQL for database. <br /> <br />
                    I'm searching to grow and evolve with my programming skills and get better over time and hard work.</p>
                    <p>You may contact me at Omergute@gmail.com or:</p>
                <div className="buttonsDiv">
                    
                <a href="https://www.linkedin.com/in/omer-logan-cohen/"><button>LinkedIn</button></a>
                <a href="https://www.facebook.com/omer.cohen.754/"><button>Facebook</button></a>
                <a href="https://github.com/CryoHeart"><button>GitHub</button></a>
                    
                </div>
                <div className="musicDiv">
                    <p>I'm also a film music and soundtrack composer. <br /> More can be learned <a href="https://mrlogan.net">here</a>.</p>
                </div>
            </div>
            <div className="imageDiv">
                <img src={pic} alt="OmerLoganCohen" width="730" height="700" />
            </div>

        </div>
    )

}

export default About;