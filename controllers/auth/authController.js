export default {
    // get all todos data
    index: (req, res) => res.json({}),

    // get all todos data
    edit: (req, res) => res.json({edit: parseInt(req.params.id, 10)}),
};
