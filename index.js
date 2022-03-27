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



// data table
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