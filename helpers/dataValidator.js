import Joi from "joi";

const dataValidate = (file) => {
  const schema = Joi.object({
    fileName: Joi.string().required(),
    content: Joi.string().required(),
  });
  return schema.validate(file);
};

export default dataValidate;
