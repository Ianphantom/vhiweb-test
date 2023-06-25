/**
 * Send a POST request to the specified URL with the provided data.
 * Handles errors for non-successful response statuses and fetch/parsing errors.
 *
 * @function postData
 * @param {string} url - The URL to send the POST request to.
 * @param {object} data - The data to include in the request body.
 * @param {string} token - The authorization token for the request.
 * @returns {Promise<object>} - A promise that resolves to the response data.
 * @throws {Error} - If the request fails or encounters an error during fetch or parsing.
 */
export const postData = async (url = "", data = {}, token = "") => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    const responseStatus = response.ok;
    const responseData = await response.json();
    return { responseStatus, responseData };
  } catch (error) {
    // Handle fetch or parsing errors
    console.error("Error:", error);
    throw error;
  }
};

/**
 * Send a GET request to the specified URL with the provided data.
 * Handles errors for non-successful response statuses and fetch/parsing errors.
 *
 * @function getData
 * @param {string} url - The URL to send the GET request to.
 * @param {string} token - The authorization token for the request.
 * @returns {Promise<object>} - A promise that resolves to the response data.
 * @throws {Error} - If the request fails or encounters an error during fetch or parsing.
 */
export const getData = async (url, token = "") => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    // Handle fetch or parsing errors
    console.error("Error:", error);
    throw error;
  }
};
