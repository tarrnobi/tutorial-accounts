class Record extends React.Component{
  formatAmount(amount) {
    return '$' + Number(amount.toLocaleString())
  }
  
  render(){
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.date}</td>
        <td>{this.formatAmount(this.props.amount)}</td>
      </tr>
    )
  }
}
