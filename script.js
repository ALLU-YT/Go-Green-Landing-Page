const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));


document.addEventListener('DOMContentLoaded', function() {
  // Hide bodycontainer_3 and bodycontainer_4 initially
  var containersToHide = document.querySelectorAll('.bodycontainer_3, .bodycontainer_4');
  containersToHide.forEach(function(container) {
    container.style.display = 'none';
  });
});

function showContainer(containerClass) {
  // Hide all containers
  var containers = document.querySelectorAll('.bodycontainer_1, .bodycontainer_2, .bodycontainer_3, .bodycontainer_4');
  containers.forEach(function(container) {
    container.style.display = 'none';
  });

  // Show the selected container
  var selectedContainer = document.querySelector(containerClass);
  if (selectedContainer) {
    selectedContainer.style.display = 'block';
  }
}
