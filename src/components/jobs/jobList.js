import './jobItem.js';

class jobList extends HTMLElement {
  set jobs(jobs) {
    this._jobs = jobs;
    this.render();
  }

  render() {
    this._jobs.forEach(job => {
      const jobItemElement = document.createElement('job-item');
      jobItemElement.job = job;
      this.appendChild(jobItemElement);
    });
  }
}
customElements.define('job-list', jobList);