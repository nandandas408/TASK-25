import { useEffect,useState } from "react";


const useFetch = (setError,setLoading) => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            let responce = await fetch("https://jsonplaceholder.typicode.com/photos");
            let datas = await responce.json();
            setData(datas);
            setLoading(false);
        } catch (error) {
            setTimeout(() => {
                setError(true);
                setLoading(false);
            },4000)
        }
    }

    fetchData();

    return data;
}

export default useFetch;