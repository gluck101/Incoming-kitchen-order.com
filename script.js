/*function fetchAndMergeOrderItems() {
  const dbRef = db.ref('orderHistory'); // Reference the 'orderHistory' node

  console.log("Fetching orders and merging all items...");

  dbRef.once('value', snapshot => {
    if (!snapshot.exists()) {
      console.error("No orders found in the 'orderHistory' node!");
      return;
    }

    // Retrieve all orders
    const orders = snapshot.val();
    console.log("Orders Retrieved:", orders);

    const displayContainer = document.getElementById('items-display');
    if (!displayContainer) {
      console.error("Display container not found!");
      return;
    }

    displayContainer.innerHTML = '<h3>Items from All Merged Orders:</h3>';

    // Create a map to store merged items and their quantities
    const itemMap = {};

    // Iterate over all orders
    Object.values(orders).forEach(order => {
      if (order.items && Array.isArray(order.items)) {
        order.items.forEach(item => {
          if (itemMap[item.name]) {
            // If item exists in the map, add the quantity
            itemMap[item.name] += item.quantity;
          } else {
            // If item does not exist in the map, add it with its quantity
            itemMap[item.name] = item.quantity;
          }
        });
      }
    });

    // Create a styled table for the merged items
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.marginTop = '20px';
    table.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    table.style.backgroundColor = '#fff';

    // Create the header row
    const headerRow = document.createElement('tr');
    ['S/N', 'Items', 'Total Quantity'].forEach(heading => {
      const th = document.createElement('th');
      th.textContent = heading;
      th.style.padding = '12px';
      th.style.border = '1px solid #ddd';
      th.style.backgroundColor = '#4CAF50';
      th.style.color = '#fff';
      th.style.fontWeight = 'bold';
      th.style.textAlign = 'center';
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Populate the table with merged items
    const mergedItems = Object.entries(itemMap);
    mergedItems.forEach(([itemName, itemQuantity], index) => {
      const row = document.createElement('tr');
      row.style.border = '1px solid #ddd';
      row.style.transition = 'background-color 0.3s ease';

      // Hover effect
      row.onmouseover = () => (row.style.backgroundColor = '#f9f9f9');
      row.onmouseout = () => (row.style.backgroundColor = '#fff');

      // Serial number column
      const snCell = document.createElement('td');
      snCell.textContent = index + 1;
      snCell.style.padding = '12px';
      snCell.style.textAlign = 'center';
      snCell.style.border = '1px solid #ddd';
      row.appendChild(snCell);

      // Item name column
      const itemCell = document.createElement('td');
      itemCell.textContent = itemName;
      itemCell.style.padding = '12px';
      itemCell.style.border = '1px solid #ddd';
      row.appendChild(itemCell);

      // Total quantity column
      const quantityCell = document.createElement('td');
      quantityCell.textContent = itemQuantity;
      quantityCell.style.padding = '12px';
      quantityCell.style.textAlign = 'center';
      quantityCell.style.border = '1px solid #ddd';
      row.appendChild(quantityCell);

      // Add the row to the table
      table.appendChild(row);
    });

    // Append the table to the display container
    displayContainer.appendChild(table);
  }).catch(error => {
    console.error("Error fetching and merging orders:", error);
  });
}

// Call the function on page load
window.onload = function () {
  fetchAndMergeOrderItems();
};*/