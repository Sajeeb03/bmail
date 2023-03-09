import "./Home.css"
import subImg from "../../../Assets/Rectangle-596.png"

const Home = () => {
    const sub = [
        {
            name: "Subject",
            id: 1,
            img: subImg,
            details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
            date: "19 Feb"
        }
    ]



    return (
        <div>
            <div className="title">
                <div>
                    <p className="title-text">
                        UPDATE YOURSELF WITH THE LATEST NEWS
                    </p>
                    <p className="title-text">
                        AI NEWS
                    </p>
                </div>
            </div>
            <div>
                {
                    sub.map(s => <div key={s.id} className="card">
                        <img src={s.img} alt="" className="subImg" />
                        <div className="text-sec">
                            <p className="subName">{s.name}</p>
                            <p className="subDetails">
                                {s.details}
                            </p>
                            <p className="date">{s.date}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Home