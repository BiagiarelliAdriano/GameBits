import axios from '../api/axiosDefaults';

/**
 * Fetches the next page of data from a paginated resource and appends
 * new unique results to the existing resource state.
 *
 * @param {object} resource - The current paginated resource object
 *   Expected shape: { next: string|null, results: Array }
 * @param {function} setResource - State setter function to update the resource
 */
export const fetchMoreData = async (resource, setResource) => {
  // If there is no next page, no need to fetch
  if (!resource.next) {
    return;
  }

  try {
    const { data } = await axios.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce(
        (acc, cur) =>
        // Avoid duplicate items by checking existing IDs
          (acc.some((accResult) => accResult.id === cur.id)
            ? acc
            : [...acc, cur]),
        prevResource.results,
      ),
    }));
  } catch (err) {
    // Log error for debugging; optionally handle it further or pass up
    console.error('Error fetching more data:', err);
  }
};
