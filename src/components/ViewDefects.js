import './defects.css';

function ViewDefects (props){

    return (
        <>
        <div className ="container border p-2" id="top">
        <h1>Defects Tracker</h1>
        <a href="#top">Logout</a><p></p>
        <a href="#top">Add Defect</a> <span>| </span>
        <a href="#top">View Defect</a>
        <div className="p-4 m-2 border">
        <h3> Filter Details</h3>
        <form className="form-select"> 
        
            <select className="form-select mr-2" name="priority">
            <option selected>Priority</option>
                <option value="All">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            
            <select className="form-select" name="category">
            <option selected>Category</option>
                <option value="UI">UI</option>
                <option value="Functional">Functional</option>
                <option value="Change Request">Change Request</option>
            </select>
        </form>
        </div>
        </div>
        <h4>Defect Details</h4>
        <h5 className="text-danger">Search Results: 3</h5>
        <div className="container">
        <table className="table border">
  <thead className = "bg-primary">
    <tr>
      <th scope="col">Defect Category</th>
      <th scope="col">Description</th>
      <th scope="col">Priority</th>
      <th scope="col">Status</th>
      <th scope="col">Change Status</th>
    </tr>
  </thead>
  <tbody className="bg-light">

    {props.defectsData.map( dvalue => {
      return (
      <tr>
      <th scope="row">{dvalue.category}</th>
      <td>{dvalue.descripton}</td>
      <td>{dvalue.priority}</td>
      <td>{dvalue.status}</td>
      <td>{dvalue.changeStatus}</td>
    </tr>)
    })}
  </tbody>
</table>
</div>
        </>
    )
}

export default ViewDefects;