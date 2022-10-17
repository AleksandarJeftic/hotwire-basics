import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = [ "loading" ]
  submitEnd(e){
    console.log(e)
    if (e.detail.success){
      this.hideModal()
    }
  }

  close(){
    this.hideModal()
  }
  
  hideModal(){
    this.element.closest('#modal').classList.add("hidden")
    this.element.closest('#modal').removeAttribute("src")
  }
}
