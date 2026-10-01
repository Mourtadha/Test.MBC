import { expect, test } from "@playwright/test";

test("home page navigates to the reservation form", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Réserver Maintenant" }).first().click();

  await expect(
    page.getByRole("heading", { name: "Réservez Votre Chauffeur" }),
  ).toBeVisible();
});

test("customer can submit a reservation with a preselected vehicle", async ({
  page,
}) => {
  await page.goto("/reservation?vehicleId=mercedes-classe-s");

  await expect(page.getByLabel("Véhicule souhaité")).toHaveValue(
    "mercedes-classe-s",
  );
  await page.getByLabel("Nom complet").fill("Alex Martin");
  await page.getByLabel("Téléphone").fill("+377 99 00 00 00");
  await page.getByLabel("Email").fill("alex@example.com");
  await page.getByLabel("Date & heure").fill("2030-06-15T14:00");
  await page.getByLabel("Lieu de prise en charge").fill("Monaco");
  await page.getByLabel("Destination").fill("Aéroport de Nice");
  await page.getByRole("button", { name: "Envoyer la Demande" }).click();

  await expect(page.getByRole("status")).toContainText(
    "Merci pour votre demande",
  );
});