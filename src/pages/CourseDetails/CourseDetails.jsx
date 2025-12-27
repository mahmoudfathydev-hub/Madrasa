import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './CourseDetails.scss';

const CourseDetails = () => {
  const { t } = useTranslation();
  const { courseId } = useParams();
  const courses = t('coursesData.courses', { returnObjects: true });
  const course = courses.find((c) => c.id === parseInt(courseId));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-details">
      <div className="container">
        <div className="course-header">
          <h1>{course.title}</h1>
          <p>{course.description}</p>
        </div>
        <div className="course-content">
          <div className="course-info">
            <p><strong>{t('courseDetails.instructor')}:</strong> {course.instructor}</p>
            <p><strong>{t('courseDetails.duration')}:</strong> {course.duration}</p>
            <p><strong>{t('courseDetails.level')}:</strong> {course.level}</p>
            <p><strong>{t('courseDetails.lessons')}:</strong> {course.lessons}</p>
            <button className="enroll-btn">{t('courseDetails.enroll')}</button>
          </div>
          <div className="course-image">
            <img src={course.image} alt={course.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
