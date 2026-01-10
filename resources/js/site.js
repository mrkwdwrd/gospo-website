document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader')
    setTimeout(() => {
        loader.classList.remove('loading')
        setTimeout(() => {
            loader.classList.add('hidden')
        }, 1000)
    }, 100)
})
