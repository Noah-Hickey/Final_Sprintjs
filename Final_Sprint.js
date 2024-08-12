
// Fetch the JSON data from the file
fetch('Final_Sprint.json')
    .then(response => response.json())
    .then(data => {
        // Call the function to display the customer information
        displayCustomers(data);
    })
    .catch(error => console.error('Error fetching JSON:', error));

// Function to display customer infromation individually
function displayCustomers(customers) {
    const customerListDiv = document.getElementById('customer-list');

    customers.forEach(customer => {
        // Create a new div element for each customer
        const customerDiv = document.createElement('div');
        customerDiv.classList.add('customer-info');
        // Log the customer details to the console
        console.log(`Customer ID: ${customer.id}, Name: ${customer.custname}, Age: ${customer.age}, Email: ${customer.email}, Order Amount: $${customer.orderamount}`);
        
        
        customerDiv.innerHTML = `
            <h3>Customer ID: ${customer.id}</h3>
            <p>Name: ${customer.custname}</p>
            <p>Age: ${customer.age}</p>
            <p>Email: ${customer.email}</p>
            <p>Order Amount: $${customer.orderamount}</p>
        `;

        // Append the customer div to customer list 
        customerListDiv.appendChild(customerDiv);
    });

// Function to calculate the total order amount
function calculateTotalOrderAmount() {
    fetch('Final_Sprint.json')
        .then(response => response.json())
        .then(data => {
            const totalAmount = data.reduce((total, customer) => {
                return total + parseFloat(customer.orderamount);
            }, 0);
            
            displayTotalOrderAmount(totalAmount);

            console.log(`Total Order Amount: $${totalAmount.toFixed(2)}`); // Log the total amount
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

// Function to display the total order amount in the HTML
function displayTotalOrderAmount(totalAmount) {
    const orderSummaryDiv = document.getElementById('order-summary');
    orderSummaryDiv.innerHTML = `<h2>Total Order Amount: $${totalAmount.toFixed(2)}</h2>`;
}



calculateTotalOrderAmount();
}
