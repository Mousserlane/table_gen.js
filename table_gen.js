
function generate_head(source, useCustomHeader, names, target) {
    var head  = document.getElementById(target) || document.querySelector('thead tr');
    if (useCustomHeader) {
        // Initially, i opt to transform the values that user would choose, eg. camel-cased values.
        // But I think using user-defined custom header is simpler and can give user more control
        // over the value they want to put in.
        if ((!names) || (Array.isArray(names) && names.length === 0)) {
            throw new Error('No header names present, please specify the header names')
        }
        for (let value of names) {
            let thCustom = document.createElement("th");
            let dataCustom = document.createTextNode(`${value[0].toUpperCase()}${value.substring(1)}`);
            thCustom.appendChild(dataCustom);
            head.appendChild(thCustom); 
        }
    } else {
        for (let key in source[0]) {
            let thDefault = document.createElement("th");
            const dataDefault = document.createTextNode(`${key[0].toUpperCase()}${key.substring(1)}`);
            thDefault.appendChild(dataDefault)
            head.appendChild(thDefault)
        }
    }
}

function generate_body(source, target) {
    var body = document.getElementById(target) || document.querySelector('tbody');
    for (let i = 0; i < source.length; i++) {
        // We can also use for...of
        const row = body.insertRow(i)
        for (key in source[i]) {
            const bodyCell = row.insertCell()
            const data = document.createTextNode(source[i][key])
            bodyCell.appendChild(data);
        }
    }
}

// It might be nice to implement XSS Catcher later