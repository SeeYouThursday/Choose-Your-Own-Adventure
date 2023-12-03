const savedStoryHandler = async (event) => {
  event.preventDefault();

  try {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`storyline/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/story/:id');
    }
  } catch (err) {
    console.log(err);
  }
};

// Event Listeners
document
  .getElementById('save-story')
  .addEventListener('click', savedStoryHandler);
