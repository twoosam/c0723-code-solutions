async function users() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      const usersArray = await response.json();
      console.log(usersArray);
    }
  } catch (error) {
    console.error('There was an error trying to get the data', error);
  }
}
users();
