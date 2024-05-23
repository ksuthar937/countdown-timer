export const getDifferance = (targetTime) => {
  const now = new Date();
  const target = new Date(targetTime);
  const difference = target - now;
  return Math.floor(difference / 1000);
};

export const getTimerData = (diff) => {
  const days = Math.floor(diff / (24 * 60 * 60));
  const hours = Math.floor((diff % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((diff % (60 * 60)) / 60);
  const seconds = Math.floor(diff % 60);
  return { days, hours, minutes, seconds };
};
