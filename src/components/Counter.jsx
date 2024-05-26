const Counter = ({ seconds }) => {
  let change = seconds.toString().split("");

  console.log(change);

  return (
    <>
      <div className="container bg-dark mt-5 d-flex justify-content-around text-white py-5 fw-bolder  rounded">
        <div className="p-5 display-1 text-warning ">
          <i className="bi bi-clock "></i>
        </div>
        <div className="p-5 display-1 border rounded bg-secondary">
            {(seconds > 9999 && seconds < 100000 ? change[0] : 0)}
        </div>
        <div className="p-5 display-1 border rounded bg-secondary">
            {(seconds > 999 && seconds < 10000 ? change[0] : 0)}
        </div>
        <div className="p-5 display-1 border rounded bg-secondary">
          {(seconds > 99 && seconds < 1000 ? change[0] : 0) ||
            (seconds > 1000 && seconds < 10000 ? change[1] : 0)}
        </div>
        <div className="p-5 display-1 border rounded bg-secondary">
          {(seconds > 9 && seconds < 99 ? change.shift() : 0) ||
            (seconds > 99 && seconds < 1000 ? change[1] : 0) ||
            (seconds > 1000 && seconds < 10000 ? change[2] : 0)}
        </div>
        <div className="p-5 display-1 border rounded bg-secondary">
          {Number(change.pop())}
        </div>
      </div>
    </>
  );
};

export default Counter;

