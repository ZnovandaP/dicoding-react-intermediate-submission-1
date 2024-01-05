const triggerToast = ({ current }) => {
  current.classList.replace('hidden', 'flex');
  setTimeout(() => {
    current.classList.replace('-bottom-4', 'bottom-8');
  }, 200);

  setTimeout(() => {
    current.classList.replace('bottom-8', '-bottom-4');
    setTimeout(() => {
      current.classList.replace('flex', 'hidden');
    }, 200);
  }, 2000);
};

export default triggerToast;
