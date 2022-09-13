import { getRefs } from "./getRefs";
const refs = getRefs();

export function formReset() {
    refs.form.reset()
}
export function galleryReset() {
    refs.galerryList.innerHTML = '';
}
