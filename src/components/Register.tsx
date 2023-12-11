

const Register = () => {
  return (
    <>

<div className="card text-bg-white w-50">
  <img src="./image/bg.jpg" className="card-img" alt="..." />
  <div className="card-img-overlay ">
    <h5 className="card-title text-primary m-5 ">
        <img src="./image/bg.jpg" alt="..." width={200}  className="rounded-circle card-img-overlay "
        style={{color:"black", border: "10px solid green", objectFit:"cover"}}/>5K
    </h5>
    6k
  </div>
</div>

<div className="card mb-3" style={{color:"red", maxWidth: "250rem"}}>
  <div className="row g-0">
    <div className="col-md-4">n
      <img src="./image/bg.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> 
    </>
  )
}

export default Register