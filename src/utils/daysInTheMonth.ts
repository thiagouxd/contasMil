const data = new Date();
export const daysInTheMonth = () => {
  const year = data.getFullYear();
  const mouth = data.getMonth();
  const daysQuantity = new Date(year, mouth, 0);

  return daysQuantity.getDate();
};

export const arrayOfDays = () => {
  const array = new Array(daysInTheMonth());
  let newArray: any = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push({ day: i + 1, value: null });
  }

  return newArray;
};

export const generateValuesOfTheMonth = (value: any) => {
  const array = new Array(daysInTheMonth());
  const valueToDay = value / daysInTheMonth();
  let newArray: any = [];

  for (var i = 0; i < array.length; i++) {
    if (i === 0) {
      newArray.push(Number(value));
    } else {
      newArray.push(
        Number(
          (Math.round((newArray[i - 1] - valueToDay) * 100) / 100).toFixed(2)
        )
      );
    }
  }

  return newArray;
};

export const generateValuesOfTheDay = (value: any, dailyExpenses: any) => {
  const teste = { day: 14, value: 600 };
  const day = data.getDate();
  const array = new Array(day);

  const filterDailyExpenses = dailyExpenses.filter((value: any) => value);

  let newArray: any = [];

  const sub = (index: any, currentValue: any) => {
    let value: number;

    const valueChanged = filterDailyExpenses.filter(
      (value: any) => index == value.date.split("-")[2]
    );

    if (valueChanged.length) {
      value = currentValue - Number(valueChanged[0].value);
    } else value = currentValue;

    return value;
  };

  for (var i = 0; i < array.length; i++) {
    if (i === 0) {
      newArray.push(Number(value));
    } else {
      const value = sub(i, newArray[i - 1]);
      newArray.push(
        Number((Math.round((value as number) * 100) / 100).toFixed(2))
      );
    }
  }
  return newArray;
};
