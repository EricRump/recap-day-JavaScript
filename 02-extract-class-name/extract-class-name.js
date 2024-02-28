function extractClassName(sessionTitle) {
  const aufbau = /Class (\d{4}) ([a-zA-zä]+)/;
  const match = sessionTitle.match(aufbau);
  if (match) {
    let [, year, month] = match;

    const months = {
      januar: "01",
      january: "01",
      februar: "02",
      february: "02",
      maerz: "03",
      märz: "03",
      march: "03",
      april: "04",
      mai: "05",
      may: "05",
      juni: "06",
      june: "06",
      juli: "07",
      july: "07",
      august: "08",
      september: "09",
      oktober: "10",
      october: "10",
      november: "11",
      dezember: "12",
      december: "12",
    };
    if (months.hasOwnProperty(month.toLowerCase())) {
      return year + "-" + months[month.toLowerCase()];
    }
  }
  return null;
}
