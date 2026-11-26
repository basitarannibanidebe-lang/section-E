function StudentCard({ name, course, level }) {
  return (
    <article className="student-card">
      <div className="student-card__accent" aria-hidden="true" />
      <div className="student-card__content">
        <p className="student-card__eyebrow">Student profile</p>
        <h1 className="student-card__name">{name}</h1>
        <dl className="student-card__details">
          <div className="student-card__detail">
            <dt>Course</dt>
            <dd>{course}</dd>
          </div>
          <div className="student-card__detail">
            <dt>Level</dt>
            <dd>{level}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default StudentCard;
