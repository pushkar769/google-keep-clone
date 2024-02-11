export const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const length = result.length;

    // Ensure start and end indexes are within bounds
    if (startIndex < 0 || startIndex >= length || endIndex < 0 || endIndex >= length) {
        console.error('Invalid start or end index for reordering.');
        return list;
    }

    // Remove the item at the startIndex from the array and store it
    const [removed] = result.splice(startIndex, 1);
    // Insert the removed item at the endIndex
    result.splice(endIndex, 0, removed);

    return result;
};
