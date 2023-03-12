export const apiServiceHandler = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();

    return data;

  } catch (error) {
    console.error(error);
  }
}