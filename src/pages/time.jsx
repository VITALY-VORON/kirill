import i1 from "./image 1 (2).png"

const Time = () => {
    return ( 
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 20
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                flexDirection: "column",
                padding: 50,
                borderRadius: 20,
                backgroundColor: "lightgray",
            }}>
                <span style={{
                    fontSize: 48,
                    fontWeight: 400
                }}>Время работы</span>
                <span style={{
                    fontSize: 96,
                    fontWeight: 400
                }}>7:00-22:00</span>
                <span style={{
                    fontSize: 24,
                    fontWeight: 400,
                    color: "red"
                }}>Понедельник-пятница</span>
            </div>
            <img src={i1} />
        </div>
     );
}
 
export default Time;