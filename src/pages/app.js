import '../components/jobs/jobList';
import '../components/jobs/jobItem';


import articles from '../components/jobs/articles';

const main = () => {
    const divJobList ='jobList';
    let myDivJobList = document.getElementById(divJobList);
    const jobListElement = document.createElement('job-list');
    jobListElement.jobs = articles;
    myDivJobList.appendChild(jobListElement);
}

export default main;