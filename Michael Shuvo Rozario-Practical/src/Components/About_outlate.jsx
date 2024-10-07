
const Outlate = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center py-5">
                <h1 className="col-md-12 mb-5">About ME</h1>
                <p>
                As a dedicated MERN stack web developer, I specialize in creating dynamic and responsive web applications that enhance user experience. Leveraging the power of MongoDB, Express.js, React, and Node.js, I build full-stack solutions tailored to meet client needs. My passion for coding drives me to stay updated with the latest technologies and best practices, ensuring that every project I undertake is efficient, scalable, and user-friendly. Whether it is crafting intuitive interfaces or developing robust backend systems, I strive to deliver high-quality results that exceed expectations. </p>

            </div>
            </div>
            <div className="text-center">
                <h2 className="mb-10">My Previous Work</h2>
                <div className="col-md-12 row gap-5">
                <div className="col-md-5 card card-compact m-auto bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">www.Aimartvintage.com</h2>
                    <div className="card-actions justify-end">
                    <button onClick={() => window.open("https://www.aimartvintage.com", "_blank")} className="btn btn-primary">Visit</button>
                    </div>
                </div>
                </div>
                <div className="col-md-5 card card-compact m-auto bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">www.about-shuvo.netlify.app</h2>
                    <div className="card-actions justify-end">
                    <button onClick={() => window.open("https://aboutshuvo.netlify.app", "_blank")} className="btn btn-primary">Visit</button>                   
                 </div>
                </div>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Outlate;