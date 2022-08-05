export const socketOrderDelivery = (io) => {
    const nameSpaceOrders = io.of("/orders-delivery-socket");
    nameSpaceOrders.on("connection", socket => {
        console.log("USER Connected");

        socket.on("position", (data) => {
            nameSpaceOrders.emit(`position/${data.inOrder}`, { latitude: data.latitude, longitude: data.longitude })
        })

        socket.on("disconnect", (data) => {
            console.log("User Disconnected!");
        })
    })
}
