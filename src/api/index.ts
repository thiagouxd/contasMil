import { getDatabase, ref, set, child, get } from "firebase/database";

export const writeExpenseData = async (obj: object) => {
  const db = getDatabase();

  const setData = (id: number) => {
    set(ref(db, "expenses/" + id), { ...obj, id: id });
  };

  try {
    const expenses = await getExpenseData();
    if (expenses) {
      const newId = expenses.length + 1;
      setData(newId);
    } else {
      setData(1);
    }
  } catch (error) {
    console.error(error);
  }
};

export const getExpenseData = async () => {
  const dbRef = ref(getDatabase());
  let data;
  
  try {
    const snapshot = await get(child(dbRef, "expenses/"));
    if (snapshot.exists()) {
      data = snapshot.val().filter((value: object) => value);
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error(error);
  }

  return data;
};

export const writeDailyExpenseData = async (
  idExpense: number,
  dailyExpense: object
) => {
  const db = getDatabase();

  const setData = (idExpense: number, idDailyExpense: number) => {
    set(ref(db, "expenses/" + idExpense + "/dailyExpense/" + idDailyExpense), {
      ...dailyExpense,
      id: idDailyExpense,
    });
  };

  try {
    const expenseDailyId = (await getDailyExpenseData(1))?.length + 1;

    setData(idExpense, expenseDailyId || 1);
  } catch (error) {
    console.error(error);
  }
};

export const getDailyExpenseData = async (expenseId: number) => {
  const dbRef = ref(getDatabase());
  let data;

  try {
    const snapshot = await get(child(dbRef, "expenses/" + expenseId));
    if (snapshot.val().dailyExpense) {
      data = snapshot.val().dailyExpense.filter((value: object) => value);
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error(error);
  }

  return data;
};
