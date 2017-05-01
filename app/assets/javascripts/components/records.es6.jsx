class Records extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      records: this.props.data
    }
  }
  addRecord(record){
    records = this.state.records.slice()
    records.push(record)
    this.setState({records: records})
  }
  deleteRecord(record){
    records = this.state.records.slice()
    index = records.indexOf(record)
    records.splice(index, 1)
    this.setState({records: records})
  }
  credits(){
    credits = this.state.records.filter(val => val.amount>=0)
    return credits.reduce ( (previous, current) => previous + parseFloat(current.amount),0)
  }
  debits(){
    debits = this.state.records.filter(val => val.amount < 0)
    val    = debits.reduce ((previous, current) => previous + parseFloat(current.amount),0)

    return val
  }
  balance(){
    return this.debits() + this.credits()
  }
  render () {
    return (
    <div className="records">
      <h2 className="title">Records</h2>
      <AmountBox
        type="success"
        amount={this.credits()}
        text="Credit" />
      <AmountBox
        type="danger"
        amount={this.debits()}
        text="Debit" />
      <AmountBox
        type="info"
        amount={this.balance()}
        text="Balance" />



      <RecordForm
        handleNewRecord={this.addRecord.bind(this)}
      />
      <table className="table table-bordered" >
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
          this.state.records.map((row) => {
            return (
              <Record
                key={row.id}
                title={row.date}
                date={row.title}
                amount={row.amount}
                record={row}
                handleDeleteRecord={this.deleteRecord.bind(this)}
              />
            )})
        }
      </tbody>
      </table>
    </div>
    );
  }

}
