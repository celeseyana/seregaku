import "./Home.css"; 

export default function Home() {
    return (
        <div className="section home-container is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
            <div className="home-content p-2 mr-6">
                <p className="title is-3">Welcome to セレ学</p>
                <p className="subtitle is-5">Your All-in-One Japanese learning platform</p>
            </div>
            <div className="ml-6">
                <img src="./src/assets/side_intro.png" style={{ width: "20vw", height: "auto" }}></img>
            </div>
        </div>
    );
};