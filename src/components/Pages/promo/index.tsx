import { useNavigate } from "react-router-dom";
import Button from "../../Atoms/Button";

function Promo() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("add-promo-code");
  };

  return <Button onClick={handleNavigate} title="Go to add promo page" />;
}

export default Promo;
