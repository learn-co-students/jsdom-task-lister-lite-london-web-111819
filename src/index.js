document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const inputs = document.getElementsByTagName('input')
  const submitInput = Array.from(inputs)[1]
  submitInput.addEventListener("click", e => {
    e.preventDefault()
  })
});
