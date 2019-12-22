export function firstDay(year, month) {
  return (new Date(year, month)).getDay();
}

export function totalDays(year, month) {
  let temp = 32 - (new Date(year, month, 32)).getDate();
  let array = [];
  for (let i = 1; i <= temp; i++) {
    array.push(i);
  }
  return array;
}

export function shiftYears(year, which) {
  let array = [];
  if (!which) {
    for (let i = 0; i < 12; i++) {
      array.push(year + i);
    }
  } else if (which == 'next') {
    year += 12;
    for (let i = 0; i < 12; i++) {
      array.push(year + i);
    }
  } else {
    year -= 12;
    for (let i = 0; i < 12; i++) {
      array.push(year + i);
    }
  }

  return array;
}

export function testing() {
  console.log('test');
}