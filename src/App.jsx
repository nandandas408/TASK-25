import useFetch from "./hooks/useFetch";



function Photos() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos",
    0,
    2500
  );
  console.log(data);
  if (loading) {
    return (
      <div className="app ">
        <div className="loader">
          <div className="cirle"></div>
          <p className="load">Loading...</p>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="app ">
        <div className="loader">Error:{error.message}</div>
      </div>
    );
  }
  return (
    <div className="app">
      <h1>Photos</h1>
      <div className="container">
        {data.map((item) => (
          <div className="small"  key={item.id}>
            <div>
          <img
            src={item.thumbnailUrl}
            
           
            className="photo"
            /></div>
            <div>{item.title}</div>
            </div>
          
        ))}
      </div>
    </div>
  );
}
export default function App() {
  return <Photos />;
}