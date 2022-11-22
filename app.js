
    /*=============== DARK LIGHT THEME ===============*/

    const themeButton = document.getElementById('toggle_checkbox')
    const darkTheme = 'dark-theme'

    
    const selectedTheme = localStorage.getItem('selected-theme')
    
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    
    if (selectedTheme) {
    
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    }
    
    themeButton.addEventListener('click', () => {
    
        document.body.classList.toggle(darkTheme)
    
        localStorage.setItem('selected-theme', getCurrentTheme())
    })
