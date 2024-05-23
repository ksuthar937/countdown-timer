export const getFormatedTime = (date) => {
  const res = new Date(date).toLocaleString();
  return res;
};

export const getDifferance = (selectedTime) => {
  //   const selectedDate = new Date(selectedTime).getDate();
  //   const currDate = new Date().getDate();

  //   const selectedHours = new Date(selectedTime).getHours();
  //   const currHours = new Date().getHours();

  //   const selectedMinutes = new Date(selectedTime).getMinutes();
  //   const currMinutes = new Date().getMinutes();

  //   const selectedSeconds = new Date(selectedTime).getSeconds();
  //   const currSeconds = new Date().getSeconds();

  //   console.log({
  //     selected: {
  //       selectedDate,
  //       selectedHours,
  //       selectedMinutes,
  //       selectedSeconds,
  //     },
  //     cur: {
  //       currDate,
  //       currHours,
  //       currMinutes,
  //       currSeconds,
  //     },
  //   });

  const selected = new Date(selectedTime).getTime();
  const curr = new Date().getTime();

  const diff = selected - curr;

  console.log(diff / (1000 * 60 * 60 * 24));

  return "ss";
};
