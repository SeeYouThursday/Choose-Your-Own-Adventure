const continuingStory = [];

const getStory = async () => {
  try {
    const id = document.querySelector('#save-story').getAttribute('data-id');
    const response = await fetch(`${window.location.origin}/api/story/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();

      if (data.story_line !== null) {
        continuingStory.push(data.story_line);
      } else {
        const updateResponse = await fetch(`/api/storyline/update/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            story_id: 1,
            story_line: `Let's get started!`,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!updateResponse.ok) {
          console.log('Error:', updateResponse.status);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const savedStoryHandler = async (event) => {
  event.preventDefault();

  try {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/storyline/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        story_line: continuingStory,
        story_id: parseInt(id),
        title: document.querySelector('#save-story').getAttribute('data-title'),
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

const nextChoiceHandler = async (event) => {
  event.preventDefault();
  const id = document.getElementById('save-story');
  const currentId = id.getAttribute('data-id');
  id.setAttribute('data-id', ++currentId);
};

getStory();

document
  .querySelector('#save-story')
  .addEventListener('click', savedStoryHandler);

document.querySelectorAll('.next-choice').forEach((button) => {
  button.addEventListener('click', nextChoiceHandler);
});
