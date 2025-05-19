export const userGenerate = (num) => {
  const usersList = Array.from({ length: num }, (_, i) => ({
    id: i + 1,
    name: `Пользователь ${i + 1}`,
    jobTitle: ["dev", "rabotyaga", "kura"][i % 3],
    departament: ["front", "freza", "yandex-lavka"][i % 3],
    company: ["mts", "yandex", "MAIL.RU-amigo_edition"][i % 3],
  }));

  return usersList;
};
