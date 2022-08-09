/*................................................................
1. If the ticket numbers is less than 100, per ticket price: 100
2. If the ticket price is more than 100, but less than 200, first 100 ticket will be 100/ticket, rest ticket will be 90 taka per piece.

3. If you purchase more than 200 ticket
================================================
a) First 100 ticket price = 100 taka per ticket.
b) 101-200 ticket = 90 taka per ticket.
c) 200+ ticket = 70 taka per ticket.
..................................................*/

function ticketPrice(ticketQuantity){
    const first100TicketRate = 100;
    const second100TicketRate = 90;
    const restOfTicketRate = 70;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100TicketRate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100TicketRate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100TicketRate;
        const totalPrice = first100Price + restTicketPrice;
        
        return totalPrice;
    }

    else{
        const first100Price = 100 * first100TicketRate;
        const second100Price = 100 * second100TicketRate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restOfTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        
        return totalCost;
    }
        
    
}

const myTicketPrice = ticketPrice(300);
console.log(myTicketPrice);

