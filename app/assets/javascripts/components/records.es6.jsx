class Records extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      records: this.props.data
    }
  }
  addRecord(record){
    console.log("Records: adding new record")
    records = this.state.records.slice()
    records.push(record)
    this.setState({records: records})
  }
  render () {
    return (
    <div className="records">
      <h2 className="title">Records</h2>
      <RecordForm
        handleNewRecord={this.addRecord.bind(this)}
      />
      <table className="table table-bordered" >
        <thead>
          <tr>
            <th >Date</th>
            <th >Title</th>
            <th >Amount</th>
          </tr>
        </thead>
        <tbody>
        {
          this.state.records.map(function(row){
            return (
              <Record
                key={row.id}
                title={row.title}
                date={row.date}
                amount={row.amount}
              />
            )

          })

        }
      </tbody>
      </table>
    </div>
    );
  }

}

class Record extends React.Component{
  render(){
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.date}</td>
        <td>{this.props.amount}</td>
      </tr>
    )
  }
}

const initialState = {
  title: '',
  date:  '',
  amount: '',
}
class RecordForm extends React.Component{

  constructor(props){
    super(props)
    this.state = initialState
  }
  handleChange(event){
    var change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }
  handleSubmit(event){
    event.preventDefault()
    $.post(''
      , {record: this.state}
      , (data) => { this.props.handleNewRecord(data) }
      , 'JSON').done((result) => {this.setState(initialState)})

  }
  valid(){
    return this.state.title && this.state.date && this.state.amount
  }
  render(){
    return (
      <form className="form-inline"
         onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <input type="text"
            className="form-control"
            placeholder="Date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange.bind(this)}/>

        </div>
        <div className="form-group">
          <input type="text"
            className="form-control"
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange.bind(this)}/>
        </div>
        <div className="form-group">
          <input type="number"
            className="form-control"
            placeholder="Amount"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange.bind(this)}/>

        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!this.valid()}
          onSubmit={this.handleSubmit.bind(this)}>Create Record
        </button>
      </form>

    )
  }

}
