// mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
})

// tabs
const tabs = document.querySelectorAll('.tabs li'); // this selects all of the li tags inside the tabs div
const tabContentBoxes = document.querySelectorAll('#tab-content > div'); // grabbing all the divs that are the direct children of the tab content id
// now attach an event listener to each of the tabs, cycling through using forEach


// attach an event listener to each of the tabs we selected above

tabs.forEach(tab => { //running the forEach function for each tab
    tab.addEventListener('click', () => {
      tabs.forEach(item => item.classList.remove('is-active')); // make sure that nothing is active to begin with. cycling through each tab to remove that class
      tab.classList.add('is-active'); // apply is-active to the one that we click on

        // now we need to swap out the content of the list
        const target = tab.dataset.target; // getting the data from the dataset of that tab

        // if the tab we choose has the id of the target we've clicked on then we want to see the data, if not hide it.
        tabContentBoxes.forEach(box => {
          if (box.getAttribute('id') === target) {
            box.classList.remove('is-hidden');
          } else {
            box.classList.add('is-hidden');
          }
        })
      })
    })

    // modal
    const signupButton = document.querySelector('#signup');
    const modalBg = document.querySelector('.modal-background');
    const modal = document.querySelector('.modal')

    signupButton.addEventListener('click', () => {
        modal.classList.add('is-active');
    })

    modalBg.addEventListener('click', () => {
        modal.classList.remove('is-active');
    });