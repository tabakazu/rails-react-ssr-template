export default {
  notice: null,
  alert: null,
  set(options) {
    if(options.notice) { this.notice = options.notice; }
    if(options.alert)  { this.alert = options.alert; }
  },
  show() {
    if(this.notice === '') {
      document.querySelector("div#flash div.alert-primary").remove();
    }
    else if(this.notice) {
      var elem = document.createElement("div");
      elem.className = "alert alert-primary";
      elem.appendChild(document.createTextNode(this.notice));
      document.querySelector("div#flash").append(elem);
      this.notice = '';
    }
    if(this.alert === '') {
      document.querySelector("div#flash div.alert-danger").remove();
    }
    else if(this.alert) {
      var elem = document.createElement("div");
      elem.className = "alert alert-danger";
      elem.appendChild(document.createTextNode(this.alert));
      document.querySelector("div#flash").append(elem);
      this.alert = '';
    }
  },
  clear() {
    innerHTML = ''
    document.querySelector("div#flash").innerHTML = '';
  }
}
