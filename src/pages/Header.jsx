import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            backgroundColor: "lightgray",
            fontSize: "20px"
        }}>
            <span>Грузоперевозки</span>
            <div style={{ display: "flex" }}>
                <button><Link to={"/about"}>О нас</Link></button>
                <button><Link to={"/contacts"}>Контакты</Link></button>
                <button><Link to={"/time"}>График</Link></button>
                <button><Link to={"/"}>Главная</Link></button>
            </div>
            <button>Тех поддержка</button>
        </div>
     );
}
 
export default Header;