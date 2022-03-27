// fetch data

const getData = async () => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/users');
    if (response.status !== 200){
        throw new Error ('Cannot fetch the data');
    }
    const data = await response.json();
    return data;
};

getData()
.then(data => console.log('resolved:',data))
.catch(err => console.log('rejected:', err.message));



// data to table
async function renderTable() {
    let dataTable = await getData()
    let TableBody = document.querySelector("tbody")

    dataTable.forEach(user => TableBody.innerHTML += 
                `<tr>
                    <th scope="row">${user.id}  </th>
                    <td> ${user.name}  </td>
                    <td> ${user.username}  </td>
                    <td> ${user.email}  </td>
                    <td> ${user.address.street}, ${user.address.suite}, ${user.address.city} (${user.address.zipcode}  </td>
                </tr>`
        
    );
}

// data to list of names
async function renderName() {
    let dataTable = await getData()
    let namesWrapper = document.querySelector("#listNames")

    dataTable.forEach(user => namesWrapper.innerHTML += 
                `
                <ul>
                <li> ${user.id}. ${user.name} </li>
                </ul>
                `
        
    );
}

// data to list of address
async function renderAddress() {
    let dataTable = await getData()
    let addressWrapper = document.querySelector("#listAddress")

    dataTable.forEach(user => addressWrapper.innerHTML+= 

                `
                <ul>
                <li> ${user.id}. ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode} </li>
                </ul>
                `
                
            
                
        
    );
}

// selected option (got this from w3s)

function selectedOption() {
    select = document.forms[0].options.value;
  }