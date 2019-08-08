const manipulate = (data) => {
    let firstname, all

    firstname = data.firstname
    all = data

    let result = {
        firstname,
        all
    }

    return result
}

//req--import--//




const merge = function(data, input) {
    return data.concat(input)
}

// concat untuk file yang berbeda //
//biar ga pake berulang kali//
//input --> data//


const insert = (data, input) => {
    data.push(input)
}

module.exports = {
    manipulate,
    merge: merge,
    add: insert
}