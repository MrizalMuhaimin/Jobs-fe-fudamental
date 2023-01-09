import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)

// Create formatter (English).
const timeAgo = new TimeAgo('en-US')

class jobItem extends HTMLElement {
    set job(job) {
      this._job = job;
      this.render();
    }
    
    render() {
      this.innerHTML = `
        <div>
            <hr/>
            <div class="d-flex justify-content-between">
                <div>
                    <div class="fw-bold">${this._job?.title}</div>
                    <div class="d-flex " style="font-size:14px">
                        <div class="text-muted">${this._job?.company}</div>
                        <div class="ps-2 pe-2">-</div>
                        <div class="text-success fw-bold">${this._job?.type}</div>
                    </div>
                </div>
                <div class="text-end" style="font-size:14px">
                    <div>${this._job?.location}</div>
                    <div class="text-muted">${timeAgo.format(new Date(this._job?.created_at))}</div>
                </div>
            </div>
            
        </div>
      `;
    }
  }
   
  customElements.define('job-item', jobItem);