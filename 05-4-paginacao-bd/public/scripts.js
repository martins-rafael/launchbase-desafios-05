// Active page
const currentPage = location.pathname
const menuItens = document.querySelectorAll('header .links a')

for (let item of menuItens) {
    if (currentPage.includes(item.getAttribute('href'))) {
        item.classList.add('active')
        console.log(item)
    }
}

// Pagination
function paginate(selectedPage, totalPages) {
    let pages = [],
        previousPage

    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
        const firstAndLast2pages = currentPage == 1 || currentPage == 2 || currentPage == totalPages - 1 || currentPage == totalPages
        const pagesBeforeSelectedPage = currentPage >= selectedPage - 1
        const pagesAfterSelectedPage = currentPage <= selectedPage + 1

        if (firstAndLast2pages || pagesBeforeSelectedPage && pagesAfterSelectedPage) {
            if (previousPage && currentPage - previousPage > 2) {
                pages.push('...')
            }

            if (previousPage && currentPage - previousPage == 2) {
                pages.push(previousPage + 1)
            }

            pages.push(currentPage)
            previousPage = currentPage
        }
    }

    return pages
}

function createPagination(pagination) {
    const page = +pagination.dataset.page
    const total = +pagination.dataset.total
    const filter = pagination.dataset.filter
    const pages = paginate(page, total)

    let elements = ''

    for (let page of pages) {
        if (String(page).includes('...')) {
            elements += `<span>${page}</span>`
        } else {
            if (filter) {
                elements += `<a href="?page=${page}&filter=${filter}">${page}</a>`
            } else {
                elements += `<a href="?page=${page}">${page}</a>`
            }
        }
    }

    pagination.innerHTML = elements
}

const pagination = document.querySelector('.pagination')

if (pagination) {
    createPagination(pagination)
}