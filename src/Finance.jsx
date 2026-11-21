const fees = [
  { id: 1, name: 'Ahmed Ali', className: 'Class One', status: 'Paid', amount: 120 },
  { id: 2, name: 'Ayan Hassan', className: 'Class Two', status: 'Unpaid', amount: 100 },
  { id: 3, name: 'Mohamed Yusuf', className: 'Class Three', status: 'Paid', amount: 150 },
  { id: 4, name: 'Hodan Omar', className: 'Class One', status: 'Unpaid', amount: 120 },
]

function Finance() {
  return (
    <main className="page">
      <h1 className="page-title">Finance Section</h1>

      <section className="panel">
        <h2>Add Student Fee</h2>
        <div className="form-row">
          <input aria-label="Student name" placeholder="Student Name" />
          <input aria-label="Class name" placeholder="Class Name" />
          <select aria-label="Payment status" defaultValue="Paid">
            <option>Paid</option>
            <option>Unpaid</option>
          </select>
          <input aria-label="Amount" placeholder="Amount" type="number" />
        </div>
        <button type="button">Add</button>
      </section>

      <section className="stats-grid">
        <article className="stat-card"><h3>Paid Students</h3><strong>2</strong></article>
        <article className="stat-card"><h3>Unpaid Students</h3><strong>2</strong></article>
        <article className="stat-card"><h3>Total Students</h3><strong>4</strong></article>
        <article className="stat-card"><h3>Student Paid</h3><strong>$270</strong></article>
      </section>

      <section className="panel">
        <h2>Finance List</h2>
        <div className="table-scroll">
          <table>
            <thead><tr><th>ID</th><th>Name</th><th>Class</th><th>Status</th><th>Amount</th></tr></thead>
            <tbody>
              {fees.map((fee) => (
                <tr key={fee.id}>
                  <td>{fee.id}</td><td>{fee.name}</td><td>{fee.className}</td>
                  <td>{fee.status}</td><td>${fee.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default Finance
