

/**
 * 
 * @param {Object} apiResponse 
 * @returns {Array}
 */
export const extractUserData = (apiResponse) => {
    if (apiResponse && apiResponse.data && Array.isArray(apiResponse.data)) {
      return apiResponse.data;
    } else {
      // En caso de que la estructura de la respuesta no sea la esperada
      console.error('La estructura de la respuesta de la API no es la esperada.');
      return [];
    }
}