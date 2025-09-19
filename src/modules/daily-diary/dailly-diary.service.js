export function dailyDiaryService(db) {
  const repo = db['DailyDiary'];

  async function findAll(userId) {
    const items = await repo.findMany({ where: { userId } });
    return items;
  }

  async function create(payload, userId) {
    const newItems = await repo.create({ data: { ...payload, userId } });
    return newItems;
  }

  return { findAll, create };
}
