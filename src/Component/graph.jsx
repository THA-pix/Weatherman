// https://api.openweathermap.org/data/2.5/forecast?q=mumbai&appid=bf2739a632bb9f29a37f9a4359c75846
export const Graph = ()=>{
    return(
        <>
            <div className="leftdiv">
                <h1 className="head">WELCOME TO <span>weatherBOSS</span></h1>
                <h1>DAILY FORECAST</h1>
                <div className="col">
                <div className="row">
                    <h3 >DAY</h3>
                    <img src={imga} alt="" />
                    <h3>TEMP</h3>
                    <h3>040 mm/h</h3>
                </div>
                <div className="row">
                    <h3 >DAY</h3>
                    <img src={imga} alt="" />
                    <h3>TEMP</h3>
                    <h3>040 mm/h</h3>
                </div>
                <div className="row">
                    <h3 >DAY</h3>
                    <img src={imga} alt="" />
                    <h3>TEMP</h3>
                    <h3>040 mm/h</h3>
                </div>
                <div className="row">
                    <h3 >DAY</h3>
                    <img src={imga} alt="" />
                    <h3>TEMP</h3>
                    <h3>040 mm/h</h3>
                </div>
                <div className="row">
                    <h3 >DAY</h3>
                    <img src={imga} alt="" />
                    <h3>TEMP</h3>
                    <h3>040 mm/h</h3>
                </div>
                <div className="row">
                    <h3 >DAY</h3>
                    <img src={imga} alt="" />
                    <h3>TEMP</h3>
                    <h3>040 mm/h</h3>
                </div>
                <div className="row">
                    <h3 >DAY</h3>
                    <h3>time</h3>
                    <img src={imga} alt="" />
                    <h3>TEMP</h3>
                    <h3>040 mm/h</h3>
                </div>
                
                </div>
            </div>
        </>
    );
}