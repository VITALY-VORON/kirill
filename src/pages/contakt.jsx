import i1 from "../assets/image 5.png"
import i2 from "../assets/image 6.png"

import i3 from "./image 7.png"
import i4 from "./image 8.png"
import i5 from "./image 9.png"
import i6 from "./Rectangle 3 (2).png"

const Contakts = () => {
    return (
        <div style={{
            display: "flex",
            width: "100vw",
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 20,
                backgroundColor: "lightgray",
                fontSize: "20px",
                borderRadius: 20,
                gap: 20,
                height: "100%",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                    backgroundColor: "lightgray",
                    fontSize: "20px",
                    borderRadius: 20
                }}>
                    <span style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "red"
                    }}>Наши контакты</span>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                    }}>
                        <button><img src={i1} height={50} /></button>
                        <button><img src={i2} height={50} /></button>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding: "20px",
                    backgroundColor: "lightgray",
                    fontSize: "20px",
                    borderRadius: 20,
                    gap: 20
                }}>
                    <span>ГОРОДА РАБОТЫ</span>
                    <span>Таганрог</span>
                    <span>Ростов на Дону</span>
                    <span>Шахты</span>
                    <span>Волгодонск</span>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 200,
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}>
                        <img src={i3} />
                        <span>
                            10-150КГ
                            <p>ЦЕНА:650рублей</p>
                        </span>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}>
                        <img src={i4} />
                        <span>
                            150-350КГ
                            <p>ЦЕНА:1200рублей</p>
                        </span>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}>
                        <img src={i5} />
                        <span>
                            350-800КГ
                            <p>ЦЕНА:1850рублей</p>
                        </span>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}>
                        <img src={i6} />
                        <span>
                            800-1500КГ
                            <p>ЦЕНА:2500рублей</p>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contakts;