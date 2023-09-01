import { useRef } from "react";

export default function Home (){

    const cityNameRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("cityName : ", cityNameRef.current.value);
    }

    return (
        <div className="home">
            <form onSubmit={submitHandler}>
                <label htmlFor="cityNameRef"> CityName: </label>
                <input 
                    id="cityNameRef" 
                    type="text" 
                    minLength={2} 
                    maxLength={20} 
                    ref={cityNameRef}
                    required
                />
                <br />
                <br />
                <button type="submit">Get Weather</button>
                <hr />
            </form>
        </div>
    )
}