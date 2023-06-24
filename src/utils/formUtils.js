/**
 * Handles the change event for input fields.
 *
 * @param {Object} event - The change event object.
 * @param {string} event.target.name - The name of the input field.
 * @param {string} event.target.value - The new value of the input field.
 * @param {Object} formFields - The current state of the form fields.
 * @param {function} setFormFields - The function to update the form fields state.
 * @returns {void}
 */

export const handleChange = (
  { target: { name, value } },
  formFields,
  setFormFields
) => {
  setFormFields({ ...formFields, [name]: value });
};
