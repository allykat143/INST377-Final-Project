import React from 'react';
const JobList = ({ jobs }) => {
  console.log('Jobs:', jobs); 
  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.MatchedObjectId}>
          <strong>{job.MatchedObjectDescriptor.PositionTitle}</strong>
          <p> Company: {job.MatchedObjectDescriptor.OrganizationName}</p>
          <p>Application Link: <a href = {job.MatchedObjectDescriptor.PositionURI}>{job.MatchedObjectDescriptor.PositionURI}</a></p>
          <p>Application Close Date: {job.MatchedObjectDescriptor.ApplicationCloseDate}</p>
        </li>
      ))}
    </ul>
  );
};
export default JobList;
