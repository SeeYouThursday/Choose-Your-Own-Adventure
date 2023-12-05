const continuingStory = [];

const updateStoryVar = () => {
  const story = document.querySelector('#save-story').getAttribute('data-id');
  continuingStory.push(story);
  return continuingStory;
};

const savedStoryHandler = async (event) => {
  event.preventDefault();

  try {
    const id = event.target.getAttribute('data-choice-set-id');
    const storyId = event.target.getAttribute('data-story-id');
    const response = await fetch(`/api/storyline/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        story_line: continuingStory,
        story_id: storyId,
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

const btnHandler = async (event) => {
  event.preventDefault();
  event.stopPropagation();
  const btns = document.querySelectorAll('.next-choice');
  btns.forEach((btn) => {
    btn.setAttribute('disabled', true);
  });
};

const nextChoiceHandler = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  let storyId = event.target.getAttribute('data-story-choice-id');
  let updatedStoryId = parseInt(storyId) + 1;

  const storyChoice = event.target.value;
  if (storyChoice) {
    continuingStory.push(storyChoice);
  } else {
    console.log('no choice');
  }

  try {
    const id = event.target.getAttribute('data-choice-set-id');

    const response = await fetch(`/api/storyline/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        story_line: continuingStory,
        story_id: updatedStoryId,
        title: document.querySelector('#save-story').getAttribute('data-title'),
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log({ message: 'Story saved!' });
      document.location.replace('/dashboard');
    }
  } catch (err) {
    console.log(err);
  }
};

const updateStory = async (selectedOption) => {
  continuingStory.push(selectedOption);
  return continuingStory;
};

document.addEventListener('DOMContentLoaded', (event) => {
  document
    .getElementById('continue')
    .addEventListener('click', async function (event) {
      event.preventDefault();
      const selectedOptionElement = document.querySelector(
        'input[name="options-outlined"]:checked'
      );
      if (selectedOptionElement) {
        const selectedOption = selectedOptionElement.value;
        updateStory(selectedOption);
      } else {
        console.log('No option selected');
      }
    });
});

document
  .querySelector('#story-choice')
  .addEventListener('submit', nextChoiceHandler);

document.querySelectorAll('.next-choice').forEach((choice) => {
  choice.addEventListener('click', btnHandler);
});
