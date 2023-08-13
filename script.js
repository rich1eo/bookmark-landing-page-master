const tabsInfo = [
  {
    id: 1,
    title: 'Bookmark in one click',
    description:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    imgPath: 'images/illustration-features-tab-1.svg',
  },
  {
    id: 2,
    title: 'Intelligent search',
    description:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    imgPath: 'images/illustration-features-tab-2.svg',
  },
  {
    id: 3,
    title: 'Share your bookmarks',
    description:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    imgPath: 'images/illustration-features-tab-3.svg',
  },
];

document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('active')) {
      return;
    }

    document.querySelector('.active').classList.remove('active');
    button.classList.add('active');

    const data = tabsInfo.find(tab => tab.id === +button.dataset.id);

    document.querySelector('.feature__toggle-details').innerHTML = `
    <img
    src="${data.imgPath}"
    alt="Picture of abstaract tablet"
    />
    <div class="toggle-info">
      <h3>${data.title}</h3>

      <p>
        ${data.description}
      </p>

      <a class="btn btn--hero">More Info</a>
    </div>
    `;
  });
});

document.querySelectorAll('.accordion-item').forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('open')) {
      item.classList.remove('open');
      return;
    }

    item.classList.add('open');
  });
});
