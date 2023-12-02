const startNewAdventureHandler = async (req, res) => {
  try {
    const title = document.getElementById('title').value.trim();

    if (title) {
      const response = await fetch('/api/start', {
        method: 'POST',
        body: JSON.stringify({ title }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        res.status(201).json({ message: 'Adventure started!' });
        document.location.replace('/dashboard');
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Event Listeners
// document.querySelector('#start').addEventListener('click', startBtnHandler);
