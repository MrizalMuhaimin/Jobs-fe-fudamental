import '../components/jobs/jobList';
import '../components/jobs/jobItem';
import {getAllJobs} from '../services/jobs';

const main = () => {
    const getDataAllJobs = async () =>{
        await getAllJobs()
        .then((data) =>{
            const divJobList ='jobList';
            let myDivJobList = document.getElementById(divJobList);
            const jobListElement = document.createElement('job-list');
            jobListElement.jobs = data.data;
            myDivJobList.appendChild(jobListElement);
        })
        .catch((err) => {
            console.log(err.message)
            
        });

    };
   

    getDataAllJobs();

    // fetch('http://dev3.dansmultipro.co.id/api/recruitment/positions.json')
    //     .then((response) => {
    //         if (!response.ok) {
    //           throw new Error(
    //             `This is an HTTP error: The status is ${response.status}`
    //           );
    //         }
    //         return response.json();
    //       })
    //       .then((actualData) => {
           
    //         })
    //       .catch((err) => {
    //         setError(err.message);
    //         setData(null);
    //       });
}

export default main;