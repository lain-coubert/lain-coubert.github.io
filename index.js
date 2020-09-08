const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const numberOfWindowsToOpen = urlParams.get('n') || 2;
const timeBetweenOpeningNewWindow = urlParams.get('t') || 1000;
let numberWindowsOpened = 0;
let newWindow;

const openWindow = () => {
  newWindow = window.open("gandalf.html", "", "width=250, height=250");
  if (newWindow !== null) numberWindowsOpened += 1;
  if (numberWindowsOpened < numberOfWindowsToOpen) setTimeout(openWindow, timeBetweenOpeningNewWindow)
};

openWindow();
