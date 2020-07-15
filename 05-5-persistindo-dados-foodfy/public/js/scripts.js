// Active menu //
const currentPage = location.pathname
const menuItens = document.querySelectorAll('header .links a')

for (let item of menuItens) {
    if (currentPage.includes(item.getAttribute('href'))) {
        item.classList.add('active')
    }
}

// Redirect to recipe //
const recipes = document.querySelectorAll('.recipe-container .recipe')

for (let recipe of recipes) {
    recipe.addEventListener('click', function () {
        const id = recipe.dataset.id
        window.location.href = `/recipes/${id}`
    })
}

// Hide recipe content //
const recipeWrapers = document.querySelectorAll('.recipe-hide')

for (let wraper of recipeWrapers) {
    const hide = wraper.querySelector('.hide')

    hide.addEventListener('click', function () {
        wraper.querySelector('.content').classList.toggle('hidden')
        if (hide.innerHTML == 'ESCONDER') {
            hide.innerHTML = 'MOSTRAR'
        } else {
            hide.innerHTML = 'ESCONDER'
        }
    })
}

// Confirm recipe/chef deletion //
function confirmDelete(formDelete) {
    formDelete.addEventListener('submit', function (event) {
        // Confirm chef has recipes //
        const totalRecipes = document.querySelector('.total-recipes')
        if (totalRecipes) {
            const total = +totalRecipes.dataset.total
            if (total) {
                event.preventDefault()
                alert('Não é possivel deletar chefs que possuem receitas!')
            } else {
                const confirmation = confirm('Deseja Deletar?')
                if (!confirmation) {
                    event.preventDefault()
                }
            }
            // Confirm recipe deletion //
        } else {
            const confirmation = confirm('Deseja Deletar?')
            if (!confirmation) {
                event.preventDefault()
            }
        }
    })
}

const formDelete = document.querySelector('#form-delete')

if (formDelete) {
    confirmDelete(formDelete)
}