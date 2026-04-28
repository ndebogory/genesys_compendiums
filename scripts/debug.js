Hooks.once("init", () => {
  console.log("Genesys Compendiums | init");
});

Hooks.once("ready", async () => {
  console.log("Genesys Compendiums | ready");

  for (const pack of game.packs) {
    if (!pack.collection.startsWith("genesys_compendiums.")) continue;

    console.log("Checking pack:", pack.collection);

    try {
      const index = await pack.getIndex();
      console.log(`Pack loaded: ${pack.collection}`, index);

      const docs = await pack.getDocuments();
      console.log(`Documents: ${docs.length}`);
    } catch (err) {
      console.error(`Pack failed: ${pack.collection}`, err);
    }
  }
});