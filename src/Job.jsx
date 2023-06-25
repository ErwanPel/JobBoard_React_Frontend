const Job = (props) => {
  console.log("job", props);
  return (
    <div className={`job ${props.className}`}>
      <h2>{props.title}</h2>
      <div>
        <span>{props.contratType}</span>-<span>{props.country}</span>-
        <span>{props.city}</span>
      </div>
    </div>
  );
};

export default Job;
