//delete post
async function deleteFormHandler(event) {
  event.preventDefault();

  //get values
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  //DELETE request to api endpoint
  const response = await fetch(`/api/storyline/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      story_id: id,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  //redirect to dashboard
  if (response.ok) {
    const confetti = new JSConfetti();
    await confetti.addConfetti({
      emojis: ['💥'],
      emojiSize: 40,
      confettiNumber: 100,
  });
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.delete-btn')
  .addEventListener('click', deleteFormHandler);

