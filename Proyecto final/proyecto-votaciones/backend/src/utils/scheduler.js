import cron from "node-cron";
import { openDb } from "../db.js";

export function startScheduler() {
  // corre cada minuto
  cron.schedule("* * * * *", async () => {
    try {
      const db = await openDb();
      const nowISO = new Date().toISOString();

      // Auto-close campaigns cuando end_date <= now and status = 'active'
      const res = await db.run(
        `UPDATE campaigns SET status = 'closed' WHERE status = 'active' AND end_date IS NOT NULL AND datetime(end_date) <= datetime(?)`,
        [nowISO]
      );
      if (res.changes > 0) {
        console.log(`Scheduler: Cerradas ${res.changes} campañas por fin de tiempo.`);
      }

      // Cleanup revoked_tokens expired (optional)
      const del = await db.run("DELETE FROM revoked_tokens WHERE datetime(expires_at) <= datetime(?)", [nowISO]);
      if (del.changes > 0) {
        console.log(`Scheduler: Eliminados ${del.changes} tokens revocados expirados.`);
      }
    } catch (err) {
      console.error("Scheduler error:", err);
    }
  });

  console.log("Scheduler started (auto-close campaigns)");
}
