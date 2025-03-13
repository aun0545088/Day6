const updateInventory = () => {
    return new Promise((resolve) => setTimeout(() => resolve("Inventory Updated"), 1000));
}

const sendEmail = () => {
    return new Promise((resolve) => setTimeout(() => resolve("Email Sent"), 2000));
}

const processOrder = async () => {
    console.log("Order Placed");
    let inventoryStatus = await updateInventory();
    console.log(inventoryStatus);
    let emailStatus = await sendEmail();
    console.log(emailStatus);
}

processOrder();