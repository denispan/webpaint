
export default function showAlert (setFunc) {
  // Показать уведомление
  const showTimeout = setTimeout(() => {
    setFunc(true);

    // Спрятать уведомление после некоторого времени
    const hideTimeout = setTimeout(() => {
      setFunc(false);
    }, 3000); // Пример: уведомление будет показано в течение 5 секунд

    // Очистка тайм-аута скрытия
    return () => clearTimeout(hideTimeout);
  }, 0);

// Очистка тайм-аута показа
  return () => clearTimeout(showTimeout);
}
