const students = [
  { name: 'Ahmed Ali', className: 'Class One', age: 12 },
  { name: 'Ayan Hassan', className: 'Class Two', age: 13 },
  { name: 'Mohamed Yusuf', className: 'Class Three', age: 11 },
]

function Students() {
  return (
    <main className="page">
      <h1 className="page-title">Students</h1>
      <p className="page-subtitle">Manage student information</p>

      <section className="stats-grid">
        <article className="stat-card"><h3>Total Students</h3><strong>3</strong></article>
        <article className="stat-card"><h3>Classes</h3><strong>3</strong></article>
      </section>

      <section className="panel">
        <h2>Add New Student</h2>
        <div className="form-row">
          <input aria-label="Student name" placeholder="Student Name" />
          <input aria-label="Class" placeholder="Class" />
          <input aria-label="Age" placeholder="Age" type="number" />
        </div>
        <button type="button">Add Student</button>
      </section>

      <section className="panel">
        <h2>Student List</h2>
        <div className="table-scroll">
          <table>
            <thead><tr><th>Name</th><th>Class</th><th>Age</th></tr></thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.name}>
                  <td>{student.name}</td><td>{student.className}</td><td>{student.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default Students
