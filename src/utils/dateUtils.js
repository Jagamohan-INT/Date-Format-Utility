export function formatDate(dateString, format) {
  let formattedDate;

  switch (format) {
    case "MM/DD/YYYY":
      const customDate1 = new Date(dateString);
      const month1 = (customDate1.getMonth() + 1).toString().padStart(2, "0");
      const day1 = customDate1.getDate().toString().padStart(2, "0");
      const year1 = customDate1.getFullYear().toString();
      formattedDate = `${month1}/${day1}/${year1}`;
      break;

    case "DD-MM-YYYY":
      const customDate2 = new Date(dateString);
      const day2 = customDate2.getDate().toString().padStart(2, "0");
      const month2 = (customDate2.getMonth() + 1).toString().padStart(2, "0");
      const year2 = customDate2.getFullYear().toString();
      formattedDate = `${day2}-${month2}-${year2}`;
      break;

    case "MM-DD-YYYY":
      const customDate5 = new Date(dateString);
      const month3 = (customDate5.getMonth() + 1).toString().padStart(2, "0");
      const day3 = customDate5.getDate().toString().padStart(2, "0");
      const year3 = customDate5.getFullYear().toString();
      formattedDate = `${month3}-${day3}-${year3}`;
      break;

    case "DD/MM/YYYY":
      const customDate4 = new Date(dateString);
      const day4 = customDate4.getDate().toString().padStart(2, "0");
      const month4 = (customDate4.getMonth() + 1).toString().padStart(2, "0");
      const year4 = customDate4.getFullYear().toString();
      formattedDate = `${day4}/${month4}/${year4}`;
      break;

    case "ISO":
      const dateISO = new Date(dateString);
      const yearISO = dateISO.getFullYear().toString().padStart(4, "0");
      const monthISO = (dateISO.getMonth() + 1).toString().padStart(2, "0");
      const dayISO = dateISO.getDate().toString().padStart(2, "0");
      formattedDate = `${dayISO}-${monthISO}-${yearISO}`;
      break;

    case "US":
      const customDateUS = new Date(dateString);
      const monthUS = (customDateUS.getMonth() + 1).toString().padStart(2, "0");
      const dayUS = customDateUS.getDate().toString().padStart(2, "0");
      const yearUS = customDateUS.getFullYear().toString();
      formattedDate = `${monthUS}/${dayUS}/${yearUS}`;
      break;

    case "UK":
      const customDateUK = new Date(dateString);
      const dayUK = customDateUK.getDate().toString().padStart(2, "0");
      const monthUK = (customDateUK.getMonth() + 1).toString().padStart(2, "0");
      const yearUK = customDateUK.getFullYear().toString();
      formattedDate = `${dayUK}/${monthUK}/${yearUK}`;
      break;

    case "short":
      const customDateShort = new Date(dateString);
      const monthShort = customDateShort.toLocaleString("default", {
        month: "short",
      });
      const dayShort = customDateShort.getDate().toString().padStart(2, "0");
      const yearShort = customDateShort.getFullYear().toString();
      formattedDate = `${monthShort} ${dayShort}, ${yearShort}`;
      break;

    case "long":
      const customDateLong = new Date(dateString);
      const options = { year: "numeric", month: "long", day: "numeric" };
      formattedDate = customDateLong.toLocaleDateString(undefined, options);
      break;

    case "day":
      const dateDay = new Date(dateString);
      const dayOfWeek = dateDay.toLocaleDateString("en-US", {
        weekday: "long",
      });
      const day = dateDay.getDate();
      const month = dateDay.toLocaleDateString("en-US", { month: "short" });
      const suffix =
        day >= 11 && day <= 13
          ? "th"
          : ["st", "nd", "rd", "th"][(day % 10) - 1];
      formattedDate = `${dayOfWeek} ${day}${suffix} ${month}, ${dateDay.getFullYear()}`;
      break;

    case "HH:mm":
      const customTime1 = new Date(dateString);
      const hours1 = customTime1.getHours().toString().padStart(2, "0");
      const minutes1 = customTime1.getMinutes().toString().padStart(2, "0");
      formattedDate = `${hours1}:${minutes1}`;
      break;

    case "hh:mm A":
      const customTime2 = new Date(dateString);
      const hours2 = (customTime2.getHours() % 12 || 12)
        .toString()
        .padStart(2, "0");
      const minutes2 = customTime2.getMinutes().toString().padStart(2, "0");
      const ampm2 = customTime2.getHours() >= 12 ? "PM" : "AM";
      formattedDate = `${hours2}:${minutes2} ${ampm2}`;
      break;

    case "MM/DD/YYYY HH:mm:ss":
      const customDateTime1 = new Date(dateString);
      const monthDT1 = (customDateTime1.getMonth() + 1)
        .toString()
        .padStart(2, "0");
      const dayDT1 = customDateTime1.getDate().toString().padStart(2, "0");
      const yearDT1 = customDateTime1.getFullYear().toString();
      const hoursDT1 = customDateTime1.getHours().toString().padStart(2, "0");
      const minutesDT1 = customDateTime1
        .getMinutes()
        .toString()
        .padStart(2, "0");
      const secondsDT1 = customDateTime1
        .getSeconds()
        .toString()
        .padStart(2, "0");
      formattedDate = `${monthDT1}/${dayDT1}/${yearDT1} ${hoursDT1}:${minutesDT1}:${secondsDT1}`;
      break;

    case "DD-MM-YYYY hh:mm A":
      const customDateTime2 = new Date(dateString);
      const dayDT2 = customDateTime2.getDate().toString().padStart(2, "0");
      const monthDT2 = (customDateTime2.getMonth() + 1)
        .toString()
        .padStart(2, "0");
      const yearDT2 = customDateTime2.getFullYear().toString();
      const hoursDT2 = (customDateTime2.getHours() % 12 || 12)
        .toString()
        .padStart(2, "0");
      const minutesDT2 = customDateTime2
        .getMinutes()
        .toString()
        .padStart(2, "0");
      const ampmDT2 = customDateTime2.getHours() >= 12 ? "PM" : "AM";
      formattedDate = `${dayDT2}-${monthDT2}-${yearDT2} ${hoursDT2}:${minutesDT2} ${ampmDT2}`;
      break;

    case "Weekday Abbreviation":
      formattedDate = new Date(dateString).toLocaleDateString("en-US", {
        weekday: "short",
      });
      break;

    case "Month Abbreviation":
      formattedDate = new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
      });
      break;

    case "Quarterly Format":
      const quarter = Math.floor((new Date(dateString).getMonth() + 3) / 3);
      const yearQ = new Date(dateString).getFullYear().toString();
      formattedDate = `Q${quarter} ${yearQ}`;
      break;

    case "Year Only":
      formattedDate = new Date(dateString).getFullYear().toString();
      break;

    case "Month and Year Only":
      const monthYear = new Date(dateString).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
      formattedDate = monthYear.charAt(0).toUpperCase() + monthYear.slice(1);
      break;

    case "Day of the Year":
      const dayOfYear = Math.floor(
        (new Date(dateString) -
          new Date(new Date(dateString).getFullYear(), 0, 0)) /
          86400000
      );
      formattedDate = `Day ${dayOfYear} of ${new Date(dateString)
        .getFullYear()
        .toString()}`;
      break;

    case "Relative Time":
      const now = new Date();
      const diff = now - new Date(dateString);
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const months = Math.floor(days / 30);
      const years = Math.floor(months / 12);

      if (years > 0) formattedDate = `${years} years ago`;
      else if (months > 0) formattedDate = `${months} months ago`;
      else if (days > 0) formattedDate = `${days} days ago`;
      else if (hours > 0) formattedDate = `${hours} hours ago`;
      else if (minutes > 0) formattedDate = `${minutes} minutes ago`;
      else formattedDate = `${seconds} seconds ago`;
      break;

    default:
      const dateD = new Date(dateString);
      const yearD = dateD.getFullYear().toString().padStart(4, "0");
      const monthD = (dateD.getMonth() + 1).toString().padStart(2, "0");
      const dayD = dateD.getDate().toString().padStart(2, "0");
      formattedDate = `${yearD}-${monthD}-${dayD}`;
      break;
  }

  return formattedDate;
}

export function parseDate(dateString, format) {
  return new Date(dateString);
}
