import { test, expect } from "@playwright/test";




test("Search books and render as a list", async ({ page }) => {
    await page.goto("http://localhost:5173/books")
    const title = await page.getByText("Busca de Livros")

    expect(title).toBeTruthy()

    await page.getByRole("textbox").fill("Harry Potter")
    await page.getByRole("button", { name: "Buscar" }).click()
    await page.waitForSelector("ul > li")

    const listCount = await page.locator("ul > li").count()
    expect(listCount).toBeGreaterThan(0)

    const firstItem = await page.locator("ul > li").first()
    expect(firstItem).toContainText(/Harry Potter/)
})