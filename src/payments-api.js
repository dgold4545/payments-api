import axios from "axios";

axios.defaults.baseURL = "https://65c23f3af7e6ea59682af8d1.mockapi.io";

export const getPayments = async () => {
  const response = await axios.get("/payments");
  return response.data;
};

export const getPaymentsById = async (paymentId) => {
  const response = await axios.get(`/payments/${paymentId}`);
  return response.data;
};

///Створюємо багатосторінковий додаток для перегляду платежів.

// Базова URL адреса для бекенду з колекцією /payments:

// https://65c23f3af7e6ea59682af8d1.mockapi.io
// Routing
// / - домашня сторінка
// /payments - сторінка списку платежів
// /payments/:paymentId - сторінка деталей платежу
// /payments/:paymentId/bank - вкладений маршрут інформації про банк
// /payments/:paymentId/receipt - вкладений маршрут інформації про чек
// * - сторінка помилки неіснуючого маршрута (404)
