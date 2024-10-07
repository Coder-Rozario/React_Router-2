import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import NavScroll from "../Components/NavScroll";

const Links = () => {
    const navigate = useNavigate();
    const handleReadMore = () => {
        navigate('/Contactme')
    }
    return (
        <div>
            <NavScroll />
            <div className="card card-compact m-auto bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2RB4MeD-ZkfK5k_uwyJjmMlRYn4xudn0H513qJX-lUsS9pQQO2mwYQF2JudwWeU-BkxI&usqp=CAU"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">M.Shuvo Rozario</h2>
                    <p>Passionate web developer ready to bring your vision to life with stunning, user-friendly websites tailored to your needs.</p>
                    <div className="card-actions justify-end">
                    <button onClick={handleReadMore} className="btn btn-primary">Hire Me</button>
                    </div>
                </div>
                </div>
                <Footer />
        </div>
    );
};

export default Links;