import i1 from "../assets/1.png"

const About = () => {
    return ( 
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            padding: 20,
            alignItems: "center",
        }}> 
            <span style={{
                fontSize: "20px",
                fontWeight: "bold"
            }}>
            <p>Во время снятия фильма "По </p>
            <p>законам военного времени” мы </p>
            <p>перевозили материалы для </p>
            <p>композиций в фильме</p>
            </span>
            <img src={i1} height={800}/>
        </div>
     );
}
 
export default About;