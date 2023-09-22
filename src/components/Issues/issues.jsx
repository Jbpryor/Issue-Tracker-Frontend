import React, { useEffect } from 'react';
import './issues.scss'
import { useLocation, Link } from 'react-router-dom';
// import Issue from './Issue/issue';
// import { issues } from './Issue/issue'
import { useSelector, useDispatch } from 'react-redux';

function Issues() {
    const location = useLocation();
    const isIssuesActive = location.pathname === '/issues';
    const issues = useSelector((state) => state.issues);
    

    return (
        <section className="issues">
            <div className={`issues-title ${isIssuesActive ? 'active' : ''}`}>Issues</div>
            <div className={`issues-container ${isIssuesActive ? 'active' : ''}`}>                
            {issues.map((issue) => (
                <Link className='issue-link' to={`/issues/${issue.id}`} key={issue.id}>
                    <div className={`issue-container ${isIssuesActive ? 'active' : ''}`}>       
                        <div className="issue-title">{issue.title}</div>
                        <div className="issue-contents">
                            {Object.entries(issue).filter(([key]) => ['project', 'priority', 'status'].includes(key)).map(([key, value]) => (                
                                <div className="issue-name" key={key}>
                                    <div className="issue-left">{key}:</div>
                                    <div className="issue-right">{value}</div>
                                </div>                               
                            ))}
                        </div>
                    </div>
                </Link>
            ))}
            </div>
        </section>
    )
}

export default Issues;