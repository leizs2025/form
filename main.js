
function loadForm(type) {
  const formContainer = document.getElementById('form-container');
  fetch(type + '.html')
    .then(res => res.text())
    .then(html => {
      formContainer.innerHTML = html;
    })
    .catch(() => {
      formContainer.innerHTML = '<p>載入表單時發生錯誤</p>';
    });
}
