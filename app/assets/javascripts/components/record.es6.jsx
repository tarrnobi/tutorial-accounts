class Record extends React.Component{
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
  render(){
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.date}</td>
        <td>{this.formatAmount(this.props.amount)}</td>
        <td>
          <a className="btn btn-danger"
          onClick={this.handleDelete.bind(this)}>
          Delete
          </a>
        </td>
      </tr>
    )
  }
}
