import { useNavigate } from "react-router-dom"

const NavigateButton = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
    navigate(-1);
};
return(
    <div>
        <button onClick={handleNavigate}>Go back</button>
    </div>
);
};
export default NavigateButton;
