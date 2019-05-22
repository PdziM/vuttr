import Joi from 'joi';

export default {
  body: {
    title: Joi.string().required(),
    link: Joi.string().required(),
    description: Joi.string().required(),
    tags: Joi.array().required(),
  },
};
