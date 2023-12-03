const savedStoryHandler = async (event) => {
  event.preventDefault();
  try {
    const response = await fetch('/api/start', {
      method: 'POST',
      body: JSON.stringify({
        title: document.querySelector('#title').value.trim(),
        // content: document.querySelector('#content').value.trim(),
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    }
  } catch (err) {
    console.log(err);
  }
};
