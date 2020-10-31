console.log('connected...')

const MEALS = [
    { description: 'Breakfast', calories: 460 },
    { description: 'Lunch', calories: 670 },
    { description: 'Snack', calories: 160 },
    { description: 'Dinner', calories: 550 },
]

function createNodeElement(tag, className, value, children) {
    const data = document.createElement(tag);
    className.forEach(item => data.classList.add(item))

    if (value) {
        const dataValue = document.createTextNode(value);
        data.appendChild(dataValue)
    }
    if (children) {
        children.forEach(child => data.appendChild(child))
    }
    
    return data
}

function createCell(fn, tag, className, value) {
    return fn(tag, className, value)
}

function createRow(fn, tag, className, value, items) {
    return fn(tag, className, value, items)
}

function createTableBody(fn, tag, className, value, items) {
    return fn(tag, className, value, items)
}

function createRowsFromData(items) {
    return items.map(item => {
        const row = createRow(createNodeElement, 'tr', ['stripe-dark'], null, [
            createCell(createNodeElement, 'td', ['pa2', 'tl'], item.description),
            createCell(createNodeElement, 'td', ['pa2', 'tr'], item.calories )
        ])
        return row
    })
}

const row = createRow(createNodeElement, 'tr', ['stripe-dark'], null, [
    createCell(createNodeElement, 'td', ['pa2', 'tl'], 'Breakfast'),
    createCell(createNodeElement, 'td', ['pa2', 'tr'], '600')
])
const rows = createRowsFromData(MEALS)


const tbody = createTableBody(createNodeElement, 'tbody', ['test'], null, rows)
const node = document.getElementById('app')
node.appendChild(tbody)


