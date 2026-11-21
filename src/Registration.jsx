function Registration() {
  return (
    <main className="page">
      <h1 className="page-title">Student Registration</h1>
      <p className="page-subtitle">Register a new student</p>

      <section className="panel registration-panel">
        <h2>Registration Form</h2>
        <div className="form-row">
          <input aria-label="Student name" placeholder="Student Name" />
          <input aria-label="Email" placeholder="Email" type="email" />
          <input aria-label="Phone" placeholder="Phone" type="tel" />
          <input aria-label="Class" placeholder="Class" />
          <input aria-label="Age" placeholder="Age" type="number" />
        </div>
        <button type="button">Register Student</button>
      </section>
    </main>
  )
}

export default Registration
