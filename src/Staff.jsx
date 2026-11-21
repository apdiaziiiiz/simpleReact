const staffMembers = [
  { name: 'Ahmed Mohamed', role: 'Teacher', email: 'ahmed@gmail.com', phone: '0612345678', status: 'Active' },
  { name: 'Fatima Ali', role: 'Accountant', email: 'fatima@gmail.com', phone: '0623456789', status: 'Active' },
  { name: 'Mohamed Hassan', role: 'Administrator', email: 'mohamed@gmail.com', phone: '0634567890', status: 'Inactive' },
]

function Staff() {
  return (
    <main className="page">
      <div className="page-heading-row">
        <div>
          <h1 className="page-title left">Staff Management</h1>
          <p className="page-subtitle">Manage school staff members</p>
        </div>
        <button type="button">+ Add Staff</button>
      </div>

      <section className="stats-grid">
        <article className="stat-card"><h3>Total Staff</h3><strong>3</strong></article>
        <article className="stat-card"><h3>Active Staff</h3><strong>2</strong></article>
        <article className="stat-card"><h3>Inactive Staff</h3><strong>1</strong></article>
      </section>

      <input className="search-input" aria-label="Search staff" placeholder="Search by name, role, email, phone or status..." />

      <section className="panel table-panel">
        <div className="table-scroll">
          <table>
            <thead><tr><th>Name</th><th>Role</th><th>Email</th><th>Phone</th><th>Status</th></tr></thead>
            <tbody>
              {staffMembers.map((member) => (
                <tr key={member.email}>
                  <td>{member.name}</td><td>{member.role}</td><td>{member.email}</td>
                  <td>{member.phone}</td><td>{member.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default Staff
