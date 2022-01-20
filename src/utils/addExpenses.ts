export const addExpenses = (dailyExpense: any) => {
  if (dailyExpense) {
    const expenses = dailyExpense.filter((value: any) => value);
    let expensesValues: any = [];

    expenses.map((expense: any) => {
      expensesValues.push(Number(expense?.value));
    });

    const add = expensesValues.reduce((a: number, b: number) => a + b, 0);

    return add;
  }
};
