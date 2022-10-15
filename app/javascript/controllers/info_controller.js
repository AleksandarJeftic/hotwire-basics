import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = [ "loading" ]
  submitEnd(e){
    if (e.detail.success){
      this.hideModal()
    }
  }
  
  hideModal(){
    this.element.parentElement.classList.add("hidden")
    this.element.parentElement.removeAttribute("src")
  }
}
