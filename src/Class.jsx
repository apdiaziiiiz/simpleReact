const classes = [
  { name: 'Class 1A', teacher: 'Ahmed Ali', students: 35, status: 'Active' },
  { name: 'Class 2B', teacher: 'Fatima Hassan', students: 28, status: 'Active' },
]

function Class() {
  return (
    <main className="page">
      <h1 className="page-title">Class Management</h1>
      <p className="page-subtitle">Manage school classes easily</p>

      <section className="stats-grid">
        <article className="stat-card"><h3>Total Classes</h3><strong>2</strong></article>
        <article className="stat-card"><h3>Total Students</h3><strong>63</strong></article>
        <article className="stat-card"><h3>Teachers</h3><strong>2</strong></article>
      </section>

      <section className="panel">
        <h2>Add New Class</h2>
        <div className="form-row">
          <input aria-label="Class name" placeholder="Class Name" />
          <input aria-label="Teacher name" placeholder="Teacher Name" />
          <input aria-label="Students count" placeholder="Students Count" />
        </div>
        <button type="button">Add Class</button>
      </section>

      <section className="panel">
        <h2>Class List</h2>
        <div className="table-scroll">
          <table>
            <thead>
              <tr><th>Class</th><th>Teacher</th><th>Students</th><th>Status</th></tr>
            </thead>
            <tbody>
              {classes.map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td><td>{item.teacher}</td><td>{item.students}</td><td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default Class
