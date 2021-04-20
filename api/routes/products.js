const express =  require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'GET successful!'
    });
});

router.post('/',(req, res, next) => {
    res.status(201).json({
        message: 'POST successful!'
    });
});


router.get('/:productId',(req, res, next) => {
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: 'SPECIAL ID',
            id: id
        });
    }else{
        res.status(200).json({
            message: 'ID'
        });
    }
});

router.patch('/:productId',(req, res, next) => {
    res.status(200).json({
        message: 'UPDATED'
    });
});

router.delete('/:productId',(req, res, next) => {
    res.status(200).json({
        message: 'DELETED'
    });
});

module.exports = router;