export const userGenerate = (num:number) => {
  const usersList = Array.from({ length: num }, (_, i) => ({
    id: i + 1,
    name: `Пользователь ${i + 1}`,
    jobTitle: ["Разработчик", "Дизайнер", "Менеджер"][i % 3],
    departament: ["IT", "Маркетинг", "Финансы"][i % 3],
    company: ["Google", "Яндекс", "Тинькофф"][i % 3],
  }));

  return usersList;
};
