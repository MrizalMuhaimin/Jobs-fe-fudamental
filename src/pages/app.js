import '../components/jobs/jobList';
import '../components/jobs/jobItem';
import {getAllJobs} from '../services/jobs';
import pickBy from 'lodash/pickBy';


const main = () => {
    const getDataAllJobs = async (params={}) =>{
        
        await getAllJobs(pickBy(params))
        .then((data) =>{
            const divJobList ='jobList';
            let myDivJobList = document.getElementById(divJobList);
            myDivJobList.innerHTML='';
            const jobListElement = document.createElement('job-list');
            jobListElement.jobs = data.data;
            myDivJobList.appendChild(jobListElement);
        })
        .catch((err) => {
            console.log(err.message)
            
        });

    };
    getDataAllJobs();

    document.getElementById('btnSearch').addEventListener('click', () =>{

        let params = {
            description:document.getElementById('iptJobDesc').value,
            location: document.getElementById('iptLocation').value,
            full_time: document.getElementById("chkFull").checked,
        };
        getDataAllJobs(params);
    });
}

export default main;