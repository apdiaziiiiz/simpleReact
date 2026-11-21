function Dashboard() {
  return (
    <main className="dashboard-home">
      <h1>School Dashboard</h1>
      <p className="dashboard-welcome">Welcome to the School Management System</p>

      <section className="dashboard-stats" aria-label="School statistics">
        <article className="dashboard-stat students-stat">
          <h2>Students</h2>
          <p>3</p>
        </article>
        <article className="dashboard-stat teachers-stat">
          <h2>Teachers</h2>
          <p>2</p>
        </article>
        <article className="dashboard-stat classes-stat">
          <h2>Classes</h2>
          <p>2</p>
        </article>
        <article className="dashboard-stat departments-stat">
          <h2>Departments</h2>
          <p>12</p>
        </article>
      </section>

      <section className="dashboard-panels">
        <article className="dashboard-panel">
          <h2>Attendance</h2>
          <p>Today's student attendance overview.</p>
          <div className="attendance-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
            <span />
          </div>
          <strong>85% Present</strong>
        </article>

        <article className="dashboard-panel">
          <h2>Upcoming Events</h2>
          <ul>
            <li>Final Exams - June 12</li>
            <li>Sports Competition - June 20</li>
            <li>Graduation Ceremony - July 1</li>
          </ul>
        </article>

        <article className="dashboard-panel">
          <h2>Notifications</h2>
          <ul>
            <li>New student registered</li>
            <li>School meeting tomorrow</li>
            <li>Results uploaded successfully</li>
          </ul>
        </article>
      </section>
    </main>
  )
}

export default Dashboard