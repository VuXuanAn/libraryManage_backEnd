const Ticket = require('../models/ticketBorrow')

exports.addTickets = (req, res) => {
    const { idBook, idUser, quantity, today, tomorrow } = req.body
    const newTicket = {
        idBook,
        idUser,
        quantity,
        dateBorrow: today,
        dateMustReturn: tomorrow,
    }


    const _newTiket = new Ticket(newTicket)
    _newTiket.save((error, nxb) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        if (nxb) {
            return res.status(201).json({ message: 'add success' });
        }
    });
}

exports.getAllTicket = async (req, res) => {
    const tickets = await Ticket.find({}).exec();
    res.status(200).json({
        tickets
    });
}

exports.returnBook = async (req, res) => {
    const { id } = req.body;
    Ticket.findOneAndUpdate({ _id: id }, { isReturn: true })
        .exec((err, _cart) => {
            if (err) return res.status(400).json({ err })
            if (_cart) {
                return res.status(200).json({ _cart })
            }
        })
}