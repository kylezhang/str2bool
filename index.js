/*
 * Created on Sun Jan 14 2018
 * Copyright (c) 2018
 * author kyle
 * file description:
 */
'use strict';

exports = module.exports = value => {
  const booleanLike = [true, 'true', 1, '1', false, 'false', 0, '0'];

  if (!booleanLike.includes(value)) {
    throw new Error('parameter must be like a boolean data.');
  }

  return (value && typeof value === 'string') ? (value.toLowerCase() === 'true' || value === '1') : (value === true || value === 1);
};
