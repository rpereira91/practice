const Activity = require('../models/activity');

exports.getIndex = (req, res, next) => {
    res.render('shop/index', {
        pageTitle: 'Activity List',
        path: '/'
      });
  };