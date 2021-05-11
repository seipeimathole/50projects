const panels = document.querySelectorAll('.panel') /* query selector - allows you to select anything e.g 'p', 'id', 'clas' */

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}