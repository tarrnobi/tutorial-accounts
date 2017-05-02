class Record extends React.Component{
  constructor(props){
    super(props)
    this.nodes = {}
    this.state = {edit: false}
  }
  formatAmount(amount) {
    return '$' + Number(amount.toLocaleString())
  }
  handleDelete(event){
    event.preventDefault()
    deleteURL = "/records/" + this.props.record.id
    $.ajax({
      type:"DELETE",
      url: deleteURL,
      success: () => {this.props.handleDeleteRecord(this.props.record)},
      dataType: "JSON"
    })
  }
  handleEdit(event){
    event.preventDefault()
    console.log(this.nodes["date"].value)
    console.log(this.nodes["title"].value)
    console.log(this.nodes["amount"].value)
  }
  handleToggleEdit(event){
    event.preventDefault()
    this.setState({edit: !this.state.edit})
  }
  getRecordRow(){
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.date}</td>
        <td>{this.formatAmount(this.props.amount)}</td>
        <td>
          <a className="btn btn-default"
            onClick={this.handleToggleEdit.bind(this)}>
            Edit
          </a>

          <a className="btn btn-danger"
          onClick={this.handleDelete.bind(this)}>
          Delete
          </a>
        </td>
      </tr>
    )
  }
  getRecordForm(){
    return (
      <tr>
        <td>
          <input className="form-control"
            type="text"
            defaultValue={this.props.record.date}
            ref={node=> this.nodes["date"] = node}/>
        </td>
        <td>
          <input className="form-control"
            type="text"
            defaultValue={this.props.record.title}
            ref={node=> this.nodes["title"] = node}/>
        </td>
        <td>
          <input className="form-control"
            type="number"
            defaultValue={this.props.record.amount}
            ref={node=> this.nodes["amount"] = node}/>
        </td>
        <td>
          <a className="btn btn-default"
            onClick={this.handleEdit.bind(this)}>
            Update
          </a>
          <a className="btn btn-danger"
            onClick={this.handleToggleEdit.bind(this)}>
            Cancel
          </a>
        </td>
      </tr>
    )
  }
  render(){
    if (this.state.edit) {
      return this.getRecordForm()
    }
    else{
      return this.getRecordRow()
    }
  }
}
