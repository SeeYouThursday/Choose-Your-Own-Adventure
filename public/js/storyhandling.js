const continuingStory = [];

const getStory = async (event) => {
  event.preventDefault();
  try {
    const response = await fetch('/api/storyline/:id', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      //TODO: Redirect to story page
      document.location.replace(`/story/${response.id}`);
      continuingStory = [...response];
      console.log(continuingStory);
    }
  } catch (error) {
    console.log(error);
  }
};

const savedStoryHandler = async (event) => {
  //PUT req
  event.preventDefault();
  try {
    const response = await fetch('/api/story/:id', {
      method: 'PUT',
      body: JSON.stringify({
        story_line: continuingStory,
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

// Event Listeners

//Waiting until the user clicks 'Save' to save the story
document
  .querySelector('#save-story')
  .addEventListener('submit', savedStoryHandler);
