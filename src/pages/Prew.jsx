import i1 from "../assets/2.png"
import i2 from "../assets/3.png"
import i3 from "../assets/4.png"
import i4 from "../assets/5.png"
import i5 from "../assets/6.png"

const Prew = () => {
    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
            }}>
                <img src={i1} />
                <img src={i2} />
                <img src={i3} />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
            }}>
                <img src={i4} />
                <img src={i5} />
            </div>
        </div>
    );
}

export default Prew;