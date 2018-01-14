/*
 * Created on Sun Jan 14 2018
 * Copyright (c) 2018
 * author kyle
 * file description:
 */
'use strict';

exports = module.exports = value => {
  return (value && typeof value === 'string') ? (value.toLowerCase() === 'true' || value === '1') : (value === true || value === 1);
};
