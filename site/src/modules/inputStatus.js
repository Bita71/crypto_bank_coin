export default function inputStatus(input, status = false) {
  if (status) {
    input.classList.remove('error');
    input.classList.add('success');
  } else {
    input.classList.add('error');
    input.classList.remove('success');
  }
}
