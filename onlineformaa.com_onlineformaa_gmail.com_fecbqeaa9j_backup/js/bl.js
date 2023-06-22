document.addEventListener('DOMContentLoaded', () => {

    function protect() {
        window.onload = function () {
            document.body.oncontextmenu = function () { return false; };
            window.addEventListener('selectstart', function (e) { e.preventDefault(); });
            document.addEventListener('keydown', function (e) {
                if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }, false);
        }
    }

    const scrollToForm = () => {
        const linkToForm = document.querySelector('.header__link')
        const form = document.getElementById('reg_form')

        linkToForm.addEventListener('click', function (e) {
            e.preventDefault()
            form.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    const setDate = () => {
        const currentYearField = document.querySelector('.current--year')
        const date = new Date()
        currentYearField.innerHTML = date.getFullYear()
    }

    scrollToForm()
    protect()
    setDate()

})