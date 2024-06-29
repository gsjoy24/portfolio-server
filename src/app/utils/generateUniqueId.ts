function generateUniqueId() {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let uniqueId = '';

  // Generate 5 random characters
  for (let i = 0; i < 5; i++) {
    uniqueId += characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
  }

  // Get current month and day
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Adding 1 to get 1-based month
  const day = String(now.getDate()).padStart(2, '0');

  // Append month and day to the ID
  uniqueId += month + day;

  return uniqueId;
}

export default generateUniqueId;
