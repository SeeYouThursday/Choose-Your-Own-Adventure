const continuingStory = [];

const getStory = async () => {
  try {
    const id = document
      .querySelector('#save-story')
      .getAttribute('data-story-choice-set');
    const response = await fetch(
      `${window.location.origin}/api/storyline/${id}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log('okay', data);
      if (data.story_line !== null) {
        continuingStory.push(data.story_line);
        console.log(continuingStory);
        return continuingStory;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

console.log('ln28', continuingStory);

//?? Is this needed?
const savedStoryHandler = async (event) => {
  event.preventDefault();
  console.log('ln33', continuingStory);

  try {
    const id = event.target.getAttribute('data-choice-set-id');
    const storyId = event.target.getAttribute('data-story-id');
    const response = await fetch(`/api/storyline/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        story_line: continuingStory,
        story_id: parseInt(storyId),
        title: document.querySelector('#save-story').getAttribute('data-title'),
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    response.json({ message: 'Story saved!' });
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
};

getStory();

document
  .querySelector('#save-story')
  .addEventListener('click', savedStoryHandler);

document.querySelectorAll('.next-choice').forEach((button) => {
  button.addEventListener('click', nextChoiceHandler);
});
